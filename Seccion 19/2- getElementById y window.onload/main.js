// window.onload espera a que la pagina esta completamente cargada
// para ejecutar el javascript
window.onload = () => {
    const parrafo = document.getElementById('text')
    // Ambas formas funcionan igual:

    //console.log(parrafo.innerHTML)
    console.log(parrafo.innerText)
}
