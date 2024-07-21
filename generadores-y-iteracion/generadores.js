/*
Generadores: Las funciones regulares devuelven sólo un valor único (o nada).

Los generadores pueden producir ('yield) múltiples valores, uno tras otro, a pedido. Funcionan muy bien con los iterables, permitiendo crear flujos de datos con facilidad.
*/

//Funciones generadoras -> function*
//Devuelve un objeto generador para gestionar la ejecución.

function* generateSequence() {
  yield 1
  yield 2
  yield 3
}

let generator = generateSequence()

//El método principal de un generador es next()
//Crea el valor y devuelve el primer valor
let one = generator.next()
console.log(JSON.stringify(one))

let second = generator.next()
console.log(JSON.stringify(second))

for (let value of generator) {
  console.log(value)
}

let squence = [0, ...generateSequence()]
console.log(squence)
