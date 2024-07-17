/*
MÉTODOS DE ARRAYS

//Agregar/Remover ítems
- push -> Agrega ítems al final.
- pop -> Extrae un ítem del inicio.
- shift -> Extrae un ítem al principio.
- unshift -> Agrega un ítem al principio.
*/

//Removiendo elementos
let arr = ['Yo', 'estudio', 'JavaScript']
arr.splice(1, 1)
console.log(arr)

//Removiendo los primeros 3 elementos y modificando
let arr2 = ['Yo', 'estudio', 'JavaScript', 'ahora', 'mismo']
arr2.splice(0, 3, 'a', 'bailar')
console.log(arr2)

//Los índices negativos están permitidos
let arr3 = [1, 2, 5, 7]
arr3.splice(-1, 0, 3, 4)
console.log(arr3)

//Slice -> Devuelve una copia de un arreglo desde el principio hasta el final.
let arr4 = ['t', 'e', 's', 't']
console.log(arr4.slice(1, 3))
console.log(arr4.slice(-2))

//Concat -> Une los ARRAYS
let arr5 = [10, 11]
console.log(arr5.concat([12, 13]))
console.log(arr5.concat([14, 15], 16, 17))

//FOREACH
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

;[2, 5, , 9].forEach(logArrayElements)

//Buscar dentro de un array
/*
indexOf(index, from) -> Busca item comenzando desde el index from, y devuelve el index donde fue encontrado, de otro modo devuelve -1.
- includes(item, from) -> Busca item comenzando desde el índice from, devuelve true en caso de ser encontrado.
- lastIndexOf() -> Busca el índice del último elemento que coincida con el elemento buscado.
*/

const MY_ARRAY = [1, 0, false, 'Apple', 'Banana', ' Orange']

console.log(MY_ARRAY.indexOf(0))
console.log(MY_ARRAY.includes(1))
console.log(MY_ARRAY.includes('Apple'))
console.log(MY_ARRAY.lastIndexOf('Apple'))

//find/findIndex/findLastIndex -> Arrays de objetos

/*
- find -> Devuelve el valor del primer elemento del array, en caso contrario devuelve undefined.
- findIndex -> Devuelve el índice del primer elemento de un array, en caso contrario devuelve -1.
- findLastIndex -> Devuelve el índice del último elemento de un array, en caso contrario devuelve -1.
*/

let users = [
  { id: 1, name: 'Mariana', age: 15 },
  { id: 2, name: 'David', age: 25 },
  { id: 3, name: 'Federico', age: 55 },
]

let user = users.find((item) => item.id === 2)
console.log(user.name)

let userIndex = users.findIndex((user) => user.name === 'Federico')
console.log(userIndex)

let userLastIndex = users.findLastIndex((user) => user.name === 'Mariana')
console.log(userLastIndex)

//filter -> Devuelve un nuevo array con todos los elementos (Búsqueda - filtrar)

let users2 = [
  { id: 1, name: 'Mariana', age: 35 },
  { id: 2, name: 'Julian', age: 45 },
  { id: 3, name: 'Federico', age: 15 },
  { id: 4, name: 'Johana', age: 28 },
  { id: 5, name: 'Adriana', age: 60 },
]

const userFiltered = users2.filter((user) => user.id < 3)
console.log(userFiltered)

/*
TRANSFORMAR UN ARRAY: 

MÉTODOS QUE TRANSFORMAN Y REORDENAN UN ARRAY
*/

//Map -> Devuelve un nuevo array con los elementos transformados.
//Transformando cada elemento en el valor de su respectivo largo (length)
let lengths = ['bilbo', 'gandalf', 'elrond', 'aragorn'].map((item) => item.length)
console.log(lengths)

//Sort -> Devuelve un nuevo array ordenado.
let sorted = [12, 45, 13, 56, 34]
sorted.sort()
console.log(sorted)

function compareNumeric(a, b) {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
}

let secondArr = [1, 2, 15]
console.log(secondArr.sort(compareNumeric))

//Una función de comparación puede devolver cualquier número
let thirdArr = [1, 2, 20]
thirdArr.sort(function (a, b) {
  return a - b
})

console.log(thirdArr)

//Usar localeCompare para strings
const countrys = ['España', 'Inglaterra', 'Alemania', 'Italia']
// countrys.sort((a, b) => (a > b ? 1 : -1))
countrys.sort((a, b) => a.localeCompare(b))
console.log(countrys)

//Reverse -> Revierte el orden de los elementos del array.

let fourthArr = [1, 2, 3, 4, 5]
fourthArr.reverse()
console.log(fourthArr)

//Split -> Separa el string en elementos según el delimitador.

let $names = 'John, Mary, James'

let fifthArr = $names.split(', ', 2)
// let fifthArr = $names.split('') -> Separa en letras

for (const name of fifthArr) {
  console.log(`Un mensaje para ${name}`)
}

console.log(fifthArr)

//Join -> Unie todos los elementos de un array en un string.

let sixthArr = ['Richard Rios', 'Luis Diaz', 'Falcao']

let $str = sixthArr.join('-')
console.log($str)

/*

forEach, for, for...of -> Iterar sobre un array.
map -> Iterar y devolver un valor por cada elemento.
reduce, reduceRight -> Calcula un único valor a partir del array.
*/

//Suma de números en una línea.
let sumNum = [1, 2, 3, 4, 5]
let result = sumNum.reduce((sum, current) => sum + current)
console.log(result)
