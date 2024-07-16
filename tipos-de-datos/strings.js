//Comillas

let $single = 'Comillas simples'
let $double = 'Comillas dobles'
//Los backsticks permiten ingresar expresiones dentro del string envolviendolos en ${}
let $backtick = `Backticks`

function sum(a, b) {
  return a + b
}

console.log(`1 + 2: ${sum(1, 2)}`)

//Los template literals o backstick permiten extender en múltiples lineas el string
let $guestList = `Ìnvitados:
* Juan
* Pepe
* Luis
* Maria
* Johana
`

console.log($guestList)

/*
Caracteres especiales:
\n -> Nueva línea
\t -> Tabulación
\', \", \` -> Comillas entre string
\\ -> Barra invertida
*/

console.log(`La barra invertida: \\`)
console.log(`¡Yo soy la \"morsa\"!`)

//Acceder a los caracteres -> [] o at()
const STR = 'Esto es una prueba'
console.log(STR[2]) // 'E'
console.log(STR.at(3)) //'s'
//El último caracter -> -1
console.log(STR.at(-1)) //'a'
console.log(STR[STR.length - 1]) //'a'

//Cambiando capitalización -> toUpperCase() o toLowerCase()
console.log('interfaz'.toUpperCase())
console.log('INTERFAZ'.toLowerCase())
//Un solo carácter en maypuscula
console.log('interfaz'[1].toUpperCase())

//BUSCAR SUBCADENAS DE CARACTERES
//indexOf() -> Devuelve el índice de la primera aparición de un carácter en una cadena
const str = 'Esto es una prueba'
console.log(str.indexOf('b')) //16
//Parámetro opcional -> Busca desde la posición especificada
console.log(str.indexOf('una', 3)) //

//includes, startsWith, endsWith
console.log('Widget with id'.includes('id', 2)) //true
console.log('Widget with id'.startsWith('Widget')) //true
console.log('Widget with id'.endsWith('id')) //true

//OBTENIENDO UN SUBSTRING -> slice(), substr(), substring() 🟨

//slice -> Retorna la parte del string desde el comienzo hasta (pero sin incluir) final.
let string = 'stringify'
console.log(string.slice(0, 4)) //stri

//substring -> Devuelve la parte del string entre el comienzo y el final (No incluyendo el final).

let secondString = 'stringify'
console.log(secondString.substring(2, 6)) //ring

//substr -> Devuelve la parte del string desde el comienzo tomando un largo comienzo.
let thirdString = 'stringify'
console.log(thirdString.substr(2)) //ringify

//COMPARANDO STRINGS
console.log('a' > 'Z') //Una letra minúscula es mayor que una mayúscula

//Métodos especiales que permiten obtener el carácter para el código y viceversa

//codePointAt() -> Devuelve el código de un carácter en una cadena
console.log('Z'.codePointAt(0)) //90
console.log('z'.codePointAt(0).toString(16)) //7a

//fromCodePoint() -> Devuelve un carácter por su código númerico
console.log(String.fromCodePoint(90)) //Z
console.log(String.fromCodePoint(0x5b)) //[

//COMPARACIONES CORRECTAS

/*
localeCompare() -> Devuelve un valor numérico que indica si un string es menor, igual o mayor que otro, 1 si es mayor, -1 si es menor y 0 si son equivalentes.
*/

console.log('b'.localeCompare('a')) //1
