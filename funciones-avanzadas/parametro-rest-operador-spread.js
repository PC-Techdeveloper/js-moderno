//Rest -> Reunir los parámetros restantes en un array
function sumAll(...args) {
  let sum = 0

  for (let arg of args) {
    sum += arg
  }
  return sum
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//Variable arguments -> Contiene todos los argumentos indexados.
//Las funciones flechas no contienen arguments
function showName() {
  return arguments
}

console.log(showName('Juan', 'Pedro', 'Maria', 'Luis'))

//Operador spread -> Crea un array a partir de un argumento
//Cuando es usado en el llamado de una función, expande el objeto iterable
//en una lista de argumentos (Math.max)

let arr1 = [1, 2, 3, 4]
let arr2 = [8, 6, -8, 1]

console.log(Math.max(...arr1, ...arr2))
//Combinando
console.log(Math.max(1, ...arr1, 2, ...arr2, 25))
//Puede ser usado para combinar arrays

let array3 = [3, 5, 1]
let array4 = [8, 9, 15]

let $marged = [0, ...array3, 2, ...array4]
console.log($marged)

//COPIA DE UN OBJETO ARRAY 🟡

let arr3 = [1, 2, 3]
let arrCopy = [...arr3]
console.log(arrCopy)

//Para un objeto
let obj1 = { a: 1, b: 2, c: 3 }
let objCopy = { ...obj1 }
console.log(objCopy)
