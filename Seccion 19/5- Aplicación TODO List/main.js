// Busca los todos en el almacenamiento local, si no hay retorna un
// arreglo vacío. (Short circuit)
const todos = JSON.parse(localStorage.getItem('todos')) || []
const render = () => {
    const todoList = document.getElementById('todo-list')
    const todosTemplate = todos.map(t => '<li>' + t + '</li>')
    todoList.innerHTML = todosTemplate.join('')
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            console.log(elemento, i)
            // Splice elimina el elemento de indice i seguido de la
            // cantidad de elementos a eliminar.
            todos.splice(i, 1)
            actualizaTodos(todos)
            render()
        })
    })
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}
// window.onload espera a que la pagina esta completamente cargada
// para ejecutarse
window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        // Evita que la aplicación se refresque
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value;
        todo.value = ''
        todos.push(todoText)
        actualizaTodos(todos)
        render()
    }
}