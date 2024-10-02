const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
const User = require('./user')

mongoose.connect('mongodb+srv://joeldaviddev:bPmkENwFXx2LiMBT@cluster0.egfqkut.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0')

//console.log(process.env.SECRET)
const validateJwt = expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
const app = express()
app.use(express.json())

// Recibe un id y lo firma con una palabra secreta.
// Devuelve un JSON Web Token.
const signToken = _id => jwt.sign({ _id }, process.env.SECRET)

app.post('/register', async (req, res) => {
    const { body } = req
    console.log({ body })
    try {
        const isUser = await User.findOne({ email: body.email })
        if (isUser) {
            return res.status(403).send('usuario ya existe')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt })
        const signed = signToken(user._id)

        res.status(201).send(signed)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.post('/login', async (req, res) => {
    const { body } = req
    try {
        const user = await User.findOne({ email: body.email })
        if (!user) {
            res.status(403).send('Usuario no encontrado')
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password)
            if (isMatch) {
                const signed = signToken(user._id)
                res.status(200).send(signed)
            } else {
                res.status(403).send('Contraseña incorrecta')
            }
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
})

const findAndAssignUser = async (req, res, next) => {
    //console.log(req)
    try {
        const user = await User.findById(req.auth._id)
        //console.log(user)
        if (!user) {
            return res.status(401).end()
        }
        req.user = user
        next()
    } catch (e) {
        next(e)
    }
}

// validateJwt es un middleware, se ejecuta antes de la función findAndAssignUser.
// los middleware se ejecutan de izquierda a derecha. Para "unir"
// validateJwt y findAndAssignUser en un solo middleware se usa
// la utilidad de express "router" y "use".
const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

// se reemplazan los middlewares validateJwt y findAndAssignUser por isAuthenticated.
app.get('/lele', isAuthenticated, (req, res) => {
    res.send(req.user)
})

// Manejo de errores generico con "use"
app.use((err, req, res, next) => {
    console.log('Mi nuevo error', err.stack)
    next(err)
})

app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error :(')
})

// Inicio del servidor
app.listen(3000, () => {
    console.log('Listening in port 3000')
})