//FUNCIONES FLECHA -> Forma corta de crear una función
const mult = (a, b) => a * b
console.log(mult(2, 3))

let age = 15

let welcome = age < 18 ? 'Bienvenido 😀' : 'Saludos, hasta la vista 👋'
console.log(welcome)

//Funciones flecha multilínea
const div = (a, b) => {
  let result = a / b
  return result
}

console.log(div(10, 2))
