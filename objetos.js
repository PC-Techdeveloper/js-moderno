//Declaración de objetos
const emptyObj = {}

const player = {
  name: 'Manzano',
  age: 20,
  isMale: true,
  getName: function () {
    return this.name
  },
}

//Propiedades de un objeto

//Notación con puntos
console.log(player.isMale) // <- Manzano

//Notación con corchetes
console.log(player['age']) // <- Manzano

//Añadir propiedades a un objeto
player.power = 10
console.log(player)

//Métodos de un objeto
const user = {
  name: 'Manz',
  talk: function () {
    console.log('Hola, soy un usuario')
  },
}

user.talk() // <- Hola, soy un usuario

//Método toString -> Intenta representar la información de un objeto en un string
const NUMBER = 42
console.log(NUMBER.toFixed(3)) // <- '42'

const json = `{
  "name": "Manz",
  "life": 99
}`

const secondUser = JSON.parse(json)

console.log(secondUser) // <- { name: 'Manz', life: 99 }

//Desestructuración de objetos -> Separar en variables las propiedades del objeto
const firstUser = {
  name: 'Leo',
  role: 'Developer',
  life: 99,
}

const { name, role, life } = firstUser
console.log(name, role, life)

//Renombrando las propiedades de un objeto, mediante la desestructuración
const { name: newName, role: newRole, life: newLife } = firstUser
console.log(newName, newRole, newLife)

/*
Reestructurando nuevos objetos -> Reutilizar objetos y recrear nuevos objetos a partir de otros, basándose en objetos que ya existen, añadiéndole nuevas propiedades o incluso sobreescribiendo antiguas.
*/
let myUser = {
  name: 'Pedro',
  age: 20,
  life: 99,
}

const fullUser = {
  ...myUser,
  power: 25, // Nueva propiedad
  life: 50, // Sobreescribe la propiedad existente de myUser
}

console.log(fullUser)

//Haciendo copias de objetos -> Se pasan por referencia (objects, arrays, etc.)
//Valores primitivos (number, string, boolean, etc.) se copian por valor

const otherUser = {
  myName: 'Santiago',
  myAge: 30,
  myLife: 100,
  features: ['JavaScript', 'React', 'Node.js'],
}

const copyUser = {
  ...structuredClone(otherUser), // Hace una copia de otro objeto
  power: 66,
  myLife: 200,
}

console.log(copyUser['features']) // <- 200

//Estructuras anidadas
const USERS = {
  name: 'Manz',
  role: 'Streamer',
  attributes: {
    height: 183,
    favColor: 'blueviolet',
    hairColor: 'black',
  },
}

const { attributes } = USERS
const {
  attributes: { height: size },
} = USERS

console.log(size)

//Desestructuración (REST) -> ...
const moreUsers = {
  firstName: 'Leo',
  role: 'Developer',
  attributes: {
    height: 183,
    favColor: 'blueviolet',
    hairColor: 'black',
  },
}

const { firstName, ...rest } = moreUsers
console.log(rest)

//Clonar objetos o elementos de un objeto
//Copiar por valor (Tipos de datos primitivos) -> Duplica el contenido

let originalValue = 42
let copyValue = originalValue
copyValue = 100
console.log(copyValue)

//Copiar por referencia (Tipos de datos no primitivos) -> Hace referencia a dónde está el contenido

let originalObject = { name: 'ManzDev' }
let copyObject = originalObject
copyObject = { name: 'LeoDev' }

console.log(copyObject)

//Iteradores de objetos -> Permite recorrer los elementos de un objeto

/*
.keys() -> Devuelve un iterador que contiene las claves de un objeto.
.values() -> Devuelve un iterador que contiene los valores de un objeto.
.entries() -> Devuelve un iterador que contiene las claves y los valores de un objeto.
*/

//Convertir un objeto a un array

const OBJ = {
  name: 'Manzano',
  age: 20,
  power: 18,
  talk: function () {
    return 'Hola!'
  },
}
console.log(Object.entries(OBJ))

const ANIMALS = ['gato', 'perro', 'ratón']
console.log(Object.keys(ANIMALS))

//Convertir un array a un objeto
const keys = ['name', 'age', 'power', 'talk']
const values = [
  'Manzano',
  20,
  18,
  function () {
    return 'Hola!'
  },
]

const entries = values.map((value, index) => [keys[index], value])
const MyUser = Object.fromEntries(entries)
console.log(MyUser)
