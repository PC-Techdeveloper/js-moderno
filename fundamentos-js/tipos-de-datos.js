//TIPOS DE DATOS PRIMITIVOS
//TIPOS DE DATOS NO PRIMITIVOS -> Objects, Arrays, Functions, Symbols

//strings
//Comillas simples
let $message = 'Hola JavaScript 👋'
$message = 3.1416
//Comillas dobles
let $secondMessage = 'Hola NodeJS👋'
//Backticks o Template Literals
let $thirdMessage = `Hola React 👋 ${$message}`
console.log($message)
console.log($secondMessage)
console.log($thirdMessage)

//Numbers -> Representa tanto enteros como flotantes (decimales)
let $n = 10
let $n2 = 10.5
console.log($n, $n2)

//NaN -> Representa un error de cálculo
let $n3 = 10 / 0
console.log(NaN + 1)
console.log(3 * NaN)
console.log('Not a number' / 2 - 1)

//BigInt -> Representa enteros de 64 bits, Binarios
const BIG_INT = BigInt(10)
console.log(BIG_INT)

//Boolean -> Representa un valor lógico
let $nameFieldChecked = true
let $ageFieldChecked = false

let $isGrater = 4 > 1
console.log($isGrater)

//Null -> Representa un valor nulo (VACÍO)
let $age = null
console.log($age)

//Undefined -> Representa un valor no definido
let $name
console.log($name)

//Operador typeof -> Devuelve el tipo de dato de una variable
let $myName = 'John'
console.log(typeof $myName)
console.log(typeof 0)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Object)
console.log(typeof Math)
