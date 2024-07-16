/*
LA SENTENCIA IF -> Evalúa la condición y ejecuta el bloque de código
*/

let $year = 2000

if ($year === 1999) {
  console.log('¡Felicidades!, Eres un genio 😀')
}

/*
LA CLAUSULA ELSE -> Ejecuta el bloque de código si la condición no es verdadera
*/

if ($year === 1999) {
  console.log('¡Felicidades!, Eres un genio 😀')
} else {
  console.log('No eres un genio 😢, Te has equivocado 😡')
}

/*
CONDICIONES ANIDADAS ELSE IF -> Ejecuta el bloque de código si la condición no es verdadera
*/

if ($year === 1999) {
  console.log('¡Felicidades!, Eres un genio 😀')
} else if ($year <= 2000) {
  console.log('Respuesta correcta!, Muy bien 🌟')
} else {
  console.log('No eres un genio 😢, Te has equivocado 😡')
}

/*
OPERADOR TERNARIO -> Devuelve el valor de una expresión, si es verdadera, sino devuelve otro valor (? :)
*/
let accessAllowed
let age = 20

let isAllowed = age <= 18 ? true : false
console.log(isAllowed)
