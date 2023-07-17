// SECCION 15. JAVASCRIPT, DECLARACION DE VARIABLES Y TIPOS DE DATOS.
console.log('\n==== SECCION 15. VARIABLES Y TIPOS DE DATOS ====')

// === TIPO DE DATOS EN JS ===
// String: Cadena de caracteres. 'a' 'Hola' 'Hola mundo' "Chanchito feliz"
// Boolean: true o false.
// Null: nulo. Variable definida cuyo valor es nulo.
// Number: 1234
// Undefined: Variable que no ha sido definida.
// Object: objeto. Estructura que nos permite agrupar datos.

// === DEFINICION DE VARIABLES ===
// var, let y const. El nombre de la variable siempre empiza con
// una letra.
// var (Tratar de evitar. Obliga a declarar a tope de archivo.)
// var miPrimeraVariable = 'lala'

// let
let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable)

// Mutabilidad
// Posibilidad de cambiar el contenido de una variable.
miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable)

// Boolean
let miBoolean =  true
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

// === OBJETOS ===
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

// === ARREGLOS ===
const arrVacio = []
const arr = [1,2,'Hola', miObjeto]

// Agrega elementos al arreglo en tiempo de ejecución
arrVacio.push(3)
arrVacio.push(2)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)
// Quita elementos al arreglo en tiempo de ejecución
arr.pop()
console.log(arrVacio,arr)

// SECCION 16. OPERADORES.
console.log('\n==== SECCION 16. OPERADORES ====')

//=== OPERADORES MATEMÁTICOS ===
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
console.log('Usando += '+num)
num -= 5
console.log('Usando -= '+num)
num *= 5
console.log('Usando *= '+num)
num /= 2
console.log('Usando /= '+num)

// === OPERADORES DE COMPARACION ===
// Comparar si es exactamente igual. Extricto.
const resultado1 = 5 === 6
console.log('5 === 6 = '+resultado1)
console.log('5 === "5" = '+ (5==='5'))

// Comparar si es igual. No estricto.
const resultado2 = 5 == 6
console.log('5 == 6 = '+resultado2)
console.log('5 == "5" = '+ (5=='5'))

const resultado3 = 5 < 6
const resultado4 = 5 > 6
const resultado5 = 5 <= 6
const resultado6 = 5 >= 6
console.log(resultado3,resultado4,resultado5,resultado6)
const resultado7 = 5 !== '5'
const resultado8 = 5 != '5'
console.log(resultado7,resultado8)

// === OPERADORES LÓGICOS ===
// or || , and && , not !
const resultOr = false || false || true || false
// OR evalua hasta el primer elemento que evalua en true. y lo asigna a la constante.
// Es este caso, el primer valor que evalúa en true es la cadena.
// Las cadenas y números evaluan como true con excepción del cero.
console.log('OR: '+resultOr)
const resultOr2 = false || false || 0 || 'Hola' || 5
console.log('OR con string y numeros: '+resultOr2)

const resultAnd = false && false && true && false
console.log('AND: '+resultAnd)
const resultNot = !false
console.log('NOT: '+resultNot)