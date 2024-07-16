/*
Los objetos y primitivos, son copiados por REFERENCIA y en cambio los primitivos (string, number, boolean, null, undefined) son copiados por VALOR.
*/

let message = 'Hello!'
let phrase = message

console.log(message === phrase) // true

//Los objetos se copian por REFERENCIA
const user = {
  name: 'Leo',
}
//Copia por la referencia
let admin = user
console.log(admin)

admin.name = 'Ricardo'
console.log(admin)

//Un objeto declarado con const puede ser modificado
const secondUser = {
  name: 'Ana',
}
secondUser.name = 'Mariana'
console.log(secondUser)

//Object.assign -> copia todas las propiedades de un objeto a otro
let thirdUser = { name: 'Juliana' }

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

//Copia todas las propiedades de permissions1 y permissions2 a thirdUser
Object.assign(thirdUser, permissions1, permissions2)
console.log(thirdUser)

//struturedClone -> Clona el objeto con todas sus propiedades anidadas
//Puede clonar objects, arrays, valores primitivos, funciones, etc.
let otherUser = {
  name: 'Juan',
  sizes: {
    height: 180,
    weight: 80,
  },
}

let clone = structuredClone(otherUser)

console.log(otherUser.sizes === clone.sizes) // false, objetos diferentes
