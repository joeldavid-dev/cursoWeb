const loadInitialTemplete = () => {
    const template = `
    <h1>Usuarios</h1>
    <form id="user-form">
        <div>
            <label>Nombre</label>
            <input name="name" />
        </div>
        <div>
            <label>Apellido</label>
            <input name="lastname" />
        </div>
        <button type="submit">Enviar</button>
    </form>
    <u1 id="user-list"></u1>
    `
    // Devuelve un listado, por eso se indica el primer elemento con [0]
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/users')
    const users = await response.json()
    const template = user => `
    <li>
        ${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button>
    </li>
    `
    const userList = document.getElementById('user-list')
    userList.innerHTML = users.map(user => template(user)).join('')
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
                method: 'DELETE',
            })
            userNode.parentNode.remove()
            alert('Eliminado con exito')
        }
        userNode
    })
}
const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        // Para que la pagina no se refresque cuando se presione enviar
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries()) // Crea un json con los datos de los formularios
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        userForm.reset()
        getUsers()
    }
}

// Ejecuta cuando se ha cargado el contenido de la ventana
window.onload = () => {
    loadInitialTemplete()
    addFormListener()
    getUsers()
}