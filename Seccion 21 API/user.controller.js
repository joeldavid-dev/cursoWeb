// Archivo creado con la finalidad de limpiar el codigo
// principal y dar orden al proyecto.
const User = {
    get: (req, res) => {
        res.status(200).send('Este es un chanchito')
    },
    list: (req, res) => {
        res.status(200).send('Hola chanchito!')
    },
    create: (req, res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: (req, res) => {
        // Postman ignora lo que enviamos por el status 204
        res.status(204).send('Actualizando chanchito')
    },
    destroy: (req, res) => {
        // Postman ignora lo que enviamos por el status 204
        res.status(204).send('Eliminando un chanchito :(')
    }
}

module.exports = User