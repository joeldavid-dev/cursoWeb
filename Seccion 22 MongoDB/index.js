const mongoose = require('mongoose')

// Al url solo remplazar contraseña y agregar nombre despues de .net/
mongoose.connect('mongodb+srv://joeldaviddev:bPmkENwFXx2LiMBT@cluster0.egfqkut.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

// Crea el modelo de la colección User
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({
        username: 'Chanchito triste',
        edad: 25
    })
    // user.save es una promesa, por lo que hay que esperar
    // a que se realice
    const savedUser = await user.save()
    console.log(savedUser)
}
//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'Chanchito feliz' })
    console.log(user)
}
//buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'Chanchito triste' })
    console.log(user)
}
//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'Chanchito feliz' })
    console.log(user)
    user.edad = 30
    await user.save()
}
//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'Chanchito triste' })
    console.log(user)
    if (user) {
        // user.remove() ya no existe, usar deleteOne
        await user.deleteOne()
    }
}
//eliminar()