/*
OPERADORES LÓGICOS: AND, OR, NOT

- AND (&&) -> Devuelve verdadero si ambas condiciones son verdaderas
- OR (||)-> Devuelve verdadero si una o ambas condiciones son verdaderas
- NOT (!) -> Devuelve verdadero si la condición es falsa
*/

//OR -> ||Encuentra el primer valor verdadero
console.log(true || true) // true (verdadero)
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false (falso)

let hour = 9
if (hour < 10 || hour > 18) {
  console.log('La oficiona esta cerrada 🏤')
}

//AND -> && Encuentra el primer valor falso
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

let isWeekend = true
if (isWeekend && hour < 18) {
  console.log('¡Felicidades has acertado! 🎉')
}

//NOT -> ! Encuentra el primer valor falso o verdadero
console.log(!true) // false
console.log(!false) // true
console.log(!'true') // false
console.log(!'false') // true
console.log(!!'Cadena de texto no vacía') // true
console.log(!!null) // false
