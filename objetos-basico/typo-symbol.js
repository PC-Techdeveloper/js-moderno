/*
Sólo dos de los tipos primitivos pueden servir como clave de propiedad de objetos:

- Strings
- Symbols -> Representan un identificador único
*/
//Tendrán valores diferentes al tener la misma descripción
let oneId = Symbol('id')
let secondId = Symbol('id')
console.log(oneId === secondId) //false
//description muestra el valor de la propiedad
console.log(oneId.description)

//Claves ocultas -> Los symbols permiten crear claves ocultas en un objeto
let user = {
  name: 'John Doe',
}

let userId = Symbol('id')
user[userId] = 1
console.log(user)

//Symbols en objetos literales
let otherId = Symbol('id')

const SECOND_USER = {
  name: 'Adriana',
  [otherId]: 123,
}
console.log(SECOND_USER)
