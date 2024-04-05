// === SECCION 15. JAVASCRIPT, DECLARACION DE VARIABLES Y TIPOS DE DATOS. ===
prSeccion(15, 'VARIABLES Y TIPOS DE DATOS')

// >>> TIPO DE DATOS EN JS.
// String: Cadena de caracteres. 'a' 'Hola' 'Hola mundo' "Chanchito feliz"
// Boolean: true o false.
// Null: nulo. Variable definida cuyo valor es nulo.
// Number: 1234
// Undefined: Variable que no ha sido definida.
// Object: objeto. Estructura que nos permite agrupar datos.

// >>> DEFINICION DE VARIABLES.
prTema('DEFINICION DE VARIABLES')
// var, let y const. El nombre de la variable siempre empiza con
// una letra.
// var (Tratar de evitar. Obliga a declarar al inicio del archivo.)
// var miPrimeraVariable = 'lala'

// let
let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable)

// Mutabilidad
// Posibilidad de cambiar el contenido de una variable.
miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable)

// Boolean
let miBoolean = true
let miOtroBool = false

// Numeros
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -2

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

// Undefined
let undef
console.log(undef)

// Null
let nulo = null
console.log(nulo)

// Imprimir multiples variables
console.log('nulo', 12, nulo)

// >>> OBJETOS.
prTema('OBJETOS')
// Objeto vacío
const miPrimerObjeto = {}

// Objeto definido
const miObjeto = {
    // Atributos
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}

console.log(miObjeto, miObjeto.unString)

// >>> ARREGLOS.
prTema('ARREGLOS')
const arrVacio = []
const arr = [1, 2, 'Hola', miObjeto]

// Agrega elementos al arreglo en tiempo de ejecución
arrVacio.push(3)
arrVacio.push(2)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)
// Quita elementos al arreglo en tiempo de ejecución
arr.pop()
console.log(arrVacio, arr)

// === SECCION 16. OPERADORES. ==============================================
// En esta sección se practican los operadores matematicos basicos 
// dentro de javascript. Son útiles para realizar algoritmos y calculos.
// Tambien se tratan los comparadores lógicos para números y valores
// booleanos.
prSeccion(16, 'OPERADORES')

// >>> OPERADORES MATEMÁTICOS.
prTema('OPERADORES MATEMÁTICOS')
const suma = 1 + 2
const resta = 1 - 2
const multiplicacion = 2 * 3
const division = 9 / 3
console.log(suma, resta, multiplicacion, division)

const modulo = 10 % 3
console.log('Modulo: ' + modulo)

let num = 5
num++
num++
num++
console.log(num)
num--
num--
num--
console.log(num)
num += 5
console.log('Usando += ' + num)
num -= 5
console.log('Usando -= ' + num)
num *= 5
console.log('Usando *= ' + num)
num /= 2
console.log('Usando /= ' + num)

// >>> OPERADORES DE COMPARACIÓN.
// Comparar si es exactamente igual. Extricto.
prTema('OPERADORES DE COMPARACIÓN')

const resultado1 = 5 === 6
console.log('5 === 6 = ' + resultado1)
console.log('5 === "5" = ' + (5 === '5'))

// Comparar si es igual. No estricto.
const resultado2 = 5 == 6
console.log('5 == 6 = ' + resultado2)
console.log('5 == "5" = ' + (5 == '5'))

const resultado3 = 5 < 6
const resultado4 = 5 > 6
const resultado5 = 5 <= 6
const resultado6 = 5 >= 6
console.log(resultado3, resultado4, resultado5, resultado6)
const resultado7 = 5 !== '5'
const resultado8 = 5 != '5'
console.log(resultado7, resultado8)

// >>> OPERADORES LÓGICOS.
// or || , and && , not !
prTema('OPERADORES LÓGICOS')

const resultOr = false || false || true || false
// OR evalua hasta el primer elemento que evalua en true. y lo asigna a la constante.
// Es este caso, el primer valor que evalúa en true es la cadena.
// Las cadenas y números evaluan como true con excepción del cero.
console.log('OR: ' + resultOr)
const resultOr2 = false || false || 0 || 'Hola' || 5
console.log('OR con string y numeros: ' + resultOr2)

const resultAnd = false && false && true && false
console.log('AND: ' + resultAnd)
const resultNot = !false
console.log('NOT: ' + resultNot)

// === SECCION 17. CONTROL DE FLUJO. ========================================
// Nos permiten realizar iteraciones o condiciones.
prSeccion(17, 'CONTROL DE FLUJO')

// >>> If
prTema('IF')

const edad = 5
if (edad > 5 && edad < 18) {
    console.log('El niño puede jugar')
} else {
    console.log('El niño no puede jugar :(')
}

// >>> While
prTema('WHILE')

let x = 0
while (x < 5) {
    console.log(x)
    x++
}

// >>> Switch
prTema('SWITCH')

switch (3) {
    case 1: {
        console.log('Yo soy el caso 1')
        break
    }
    case 2: {
        console.log('Chanchito feliz')
        break
    }
    case 3:
        console.log('Chanchito triste :(')
        break

    default:
        console.log('No hay chanchitos')
        break
}

// >>> For
prTema('FOR')

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//const numeros = [1,2,'Hola',4,5]

//for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i])
//}

// === SECCION 18. FUNCIONES. ===============================================
// Distintas formas para reutilizar código ya establecido.
prSeccion(18, 'FUNCIONES')

// >>> FUNCIONES BASICAS
prTema('FUNCIONES BASICAS')

function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i])
    }
}

const numeros = [1, 2, 'Hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito feliz', 'Chanchito triste']
iterar(numeros)
iterar(nombres)

// >>> MAS FUNCIONES
prTema('MAS FUNCIONES')

function fSuma(a, b) {
    return a + b;
}

resutladoSuma1 = fSuma(1, 2)
resutladoSuma2 = fSuma(5, 6)
resutladoSuma3 = fSuma(resutladoSuma1, resutladoSuma2)
console.log('resultado:', resutladoSuma3);

// >>> CALLBACKS
prTema('CALLBACKS')

function fSumar(a, b, cb) {
    const r = a + b
    cb(r)
}
function callback(result) {
    console.log('Resultado callback:', result)
}
// Pasamos la referencia de la función callback a la función sumar,
// donde se realiza la suma y posteriormente usa esa referencia para ejecutar
// callback.

// Las funciones en javascript son valores. Se pueden pasar como argumentos
// a otras funciones y componer comportamientos nuevos al código.

fSumar(2, 3, callback)

// >>> FAT ARROW FUNCTIONS
prTema('FAT ARROW FUNCTIONS')

const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
r = miFatArrowFunction(1, 2)
console.log('Resultado fat arrow:', r)
console.log('Resultado otraFAF:', otraFAF(4, 5))

// >>> FUNCIONES ANONIMAS
// Desventaja: no nos permite reutilizar el código de la función.
prTema('FUNCIONES ANONIMAS')

fSumar(2, 3, function (r) {
    console.log('Soy una función anonima y mi resultado es', r)
})

// === SECCION 20. MAS FUNCIONALIDADES DE JAVASCRIPT. ===============================================
// Distintas formas para reutilizar código ya establecido.
prSeccion(20, 'MAS FUNCIONALIDADES DE JAVASCRIPT')

// >>> SPREAD OPERATOR
// Ayuda a "copiar" una variable o constante, sin estar ligados.
prTema('SPREAD OPERATOR')

const a = { b: 1 }
// a y b estan ligados.
const b = a
console.log('a =', a)
console.log('b =', b)
b.c = 2
console.log('a =', a)
console.log('b =', b)
console.log('a === b :', a === b)

// Spread operator
const c = { ...a }
c.d = 2
console.log('a =', a)
console.log('c =', c)
console.log('a === c :', a === c)

// >>> PROMESAS
// Valor que se resolvera en el futuro.
prTema('PROMESAS')

// Promise es una constante global. Nos permite resolver 
// valores de manera asincrona.
// Aqui se indica que este valor está resuelto.
//Promise.resolve(2)

// Aquí se ejecuta primero el console log.
Promise.resolve(2).then(valor => console.log(valor))
Promise.resolve(2).then(valor => valor + 1)
.then(valor => console.log(valor))

// Manejando errores con catch y rechazando valores con reject
Promise.resolve(2)
.then(valor => Promise.reject(1))
.then(valor => console.log(valor))
.catch(e => console.error('error'))

// Estructura de Promise con retardo de 1 seg. para
// ejemplificar su fincionamiento asincrono.
new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 1000)
})
.then(x => console.log(x))
.catch(e => console.error('error'))

// ====================================================
// Funciones de impresión
function prSeccion(num, texto) {
    let numStr = num.toString()
    let barra = ''
    for (let i = 0; i < numStr.length + texto.length + 21; i++) {
        barra += '='
    }
    console.log('\n')
    console.log(barra)
    console.log('==== SECCIÓN', numStr, ':', texto, '====')
    console.log(barra)
}

function prTema(texto) {
    console.log('\n>>>', texto)
}
