// Asingmacion del framework express. Require importa
// dependencias y recibe el nombre de la dependencia
const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
// Al url solo remplazar contraseña y agregar nombre despues de .net/
mongoose.connect('mongodb+srv://joeldaviddev:bPmkENwFXx2LiMBT@cluster0.egfqkut.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

// midleware. Sirve archivos de una carpeta llamada "app"
app.use(express.static('app'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

// Siempre al final
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
