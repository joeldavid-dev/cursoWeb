// window.onload espera a que la pagina esta completamente cargada
// para ejecutar el javascript
window.onload = () => {
    const parrafo = document.getElementById('text')
    // Crea nuevos elementos HTML desde el script.
    parrafo.innerHTML = '<li>Elemento 1</li><li>Elemento 2</li>'
}