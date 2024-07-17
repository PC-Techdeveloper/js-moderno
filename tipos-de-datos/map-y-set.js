/*
MAP -> Es una colección de datos identificados por claves, la única diferencia es que Map permite claves de cualquier tipo.

Los métodos y propiedades de Map:

- new Map() -> Crea un nuevo mapa vacío.
- map.set(clave, valor) -> Almacena el valor asociado a la clave.
- map.get(clave) -> Devuelve el valor asociado a la clave, sino devuelve UNDEFINED.
- map.has(clave) -> Devuelve true si la clave existe, sino devuelve false.
- map.delete(clave) -> Elimina la clave y el valor asociado.
- map.clear() -> Elimina todos los elementos del mapa.
- map.size -> Devuelve el número de elementos del mapa.
*/

let map = new Map()

map.set(1, 'num1')
console.log(map)

console.log(map.get(1))
console.log(map.has(1))

//Objetos como claves
let john = { name: 'John' }
let visitsCountMap = new Map()

visitsCountMap.set(john, 123)
console.log(visitsCountMap)

//Encadenamiento
map.set('2', 'str2').set(1, 'num1').set(true, 'bool1')

console.log(map)

/*
ITERACIÓN SOBRE MAP
* map.key -> Devuelve un iterable con las claves.
* map.value -> Devuelve un iterable con los valores.
* map.entries -> Devuelve un iterable con las claves y los valores. con for...of
*/

let recipeMap = new Map([
  ['eggs', 20],
  ['milk', 30],
  ['bread', 50],
  ['tomatoes', 350],
])

//Iterando sobre las claves
for (const vegetable of recipeMap.keys()) {
  // console.log(vegetable)
}

// Iterando sobre los valores
for (const price of recipeMap.values()) {
  // console.log(price)
}

// Iterando sobre las claves y los valores
for (const [vegetable, price] of recipeMap.entries()) {
  console.log(vegetable, price)
}

//Object.entries: Map desde Objeto
let secondMap = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
])

console.log(secondMap.get(1))

let objectMap = {
  name: 'Santiago',
  age: 11,
}

let otherMap = new Map(Object.entries(objectMap))
console.log(otherMap.get('name'))

//Object.fromEntries: Objeto desde Map

const thirdMap = Object.fromEntries([
  ['banana', 100],
  ['apple', 200],
  ['orange', 300],
])

console.log(thirdMap.banana)

/**
 * Un set es un conjunto de valores (sin clave), donde cada valor puede aparecer solo una vez.
 * new Set() -> Crea un nuevo set vacío.
 * set.add(valor) -> Agrega un valor al set.
 * set.delete(valor) -> Elimina un valor del set.
 * set.has(valor) -> Devuelve true si el valor existe, sino devuelve false.
 * set.clear() -> Elimina todos los elementos del set.
 * set.size -> Devuelve el número de elementos del set.
 */

const SET = new Set()

let rodrigo = { name: 'rodrigo' }
let pete = { name: 'pete' }
let mary = { name: 'mary' }

SET.add(rodrigo)
SET.add(pete)
SET.add(mary)

//Set solo guarda valores únicos
console.log(SET.size)

for (const user of SET) {
  console.log(user.name)
}

/**
 * ITERACIÓN SOBRE SET:
 * Podemos recorrer Set con for...of o usando forEach
 */
let $set = new Set(['orange', 'apple', 'bananas', 'tomatoes'])

for (let fruit of $set) {
  console.log(fruit)
}
