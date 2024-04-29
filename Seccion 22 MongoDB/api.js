// Asingmacion del framework express.Require importa
// dependencias y recibe el nombre de la dependencia
const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
// Al url solo remplazar contraseña y agregar nombre despues de .net/
mongoose.connect('mongodb+srv://joeldaviddev:bPmkENwFXx2LiMBT@cluster0.egfqkut.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

// Siempre al final
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
