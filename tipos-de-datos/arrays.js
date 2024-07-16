//Los arrays son una colección de datos ordenada, ya que contienen cualquier tipo de datos

//Declaración de arrays
const array1 = new Array()
const array2 = []

const array3 = ['apple', 'orange', 'plum']
//Los elementos de un array están numerados desde cero
//Acceder a un elemento por su índice entre corchetes
console.log(array3[2]) //apple

//Reemplazar un elemento por su índice
array3[2] = 'kiwi'
console.log(array3)
//Agregar un nuevo elemento al array
array3[3] = 'pear'
console.log(array3)

//Longitud del array
console.log(array3.length) //4

//Puede almacenar cualquier tipo de dato
let array4 = [
  'apple',
  { name: 'orange', color: 'orange' },
  [1, 2, 3],
  true,
  function apple() {
    return '🍎'
  },
]

console.log(array4[4]())

//POP/PUSH, SHIFT/UNSHIFT

//push -> Agrega un elemento al final
//pop -> Toma un elemento desde el final (Elimina el último elemento)
//shift -> Obtiene el primer elemento y lo elimina (Elimina el primer elemento)
//unshift -> Agrega un elemento al principio

//push y pop trabajan sobre el final del array
const FRUITS = ['🍎', '🍌', '🍊']
FRUITS.push('🍇')
console.log(FRUITS)

console.log(FRUITS.pop())

//shift y unshift trabajan sobre el principio del array

const VEGETABLES = ['🥦', '🥕', '🥬']
console.log(VEGETABLES.shift())
console.log(VEGETABLES.unshift('🥒'))
console.log(VEGETABLES)

//RECORRER ARRAYS O ITERARLOS
const MY_ARRAY = ['🍎', '🍌', '🍊', '🍇', '🥦', '🥕', '🥬', '🥒']
for (let i = 0; i < MY_ARRAY.length; i++) {
  console.log(MY_ARRAY[i])
}

for (const vegetales of MY_ARRAY) {
  console.log(vegetales)
}

for (const myVegetals in MY_ARRAY) {
  console.log(MY_ARRAY[myVegetals])
}

//MATRICES -> Matrices son arrays de arreglos
const MATRIX = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(MATRIX[0][1]) //2
