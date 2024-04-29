const user = require('./user.controller')
// Asingmacion del framework express.Require importa
// dependencias y recibe el nombre de la dependencia
const express = require('express')
const app = express()
const port = 3000


app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

/* ID es una variable que recibe la API en la url.
// ID debe ser string, y ser invocado con el verbo put
app.put('/:id', (req, res) => {
    console.log(req.params)
    // Solo devuelve el estado
    res.sendStatus(204)
})*/

// Siempre al final
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
