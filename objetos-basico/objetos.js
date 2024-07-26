/*
Los son usados para almacenar colecciones de datos y entidades más complejas asociados con un nombre clave. En JavaScript, los objetos penetran casi todos los aspectos del lenguaje. Donde una propiedad es un par clave-valor, y un valor puede ser cualquier tipo de dato.
*/

//Constructor de objeto
let userOne = new Object()
//Objeto literal
let userTwo = {}

//Liteerales y propiedades
let user = {
  //clave:valor
  name: 'John',
  age: 38,
  //Nombrar una propiedad larga
  'likes birds': true,
}

//Obteniendo los valores de las propiedades del objeto
console.log(user.name)
console.log(user['age'])

//Añadiendo nuevas propiedades
user.isAdmin = true
user.role = 'admin'
console.log(user)

//Eliminando propiedades
delete user.isAdmin

//Acceder a una propiedad larga con los corchetes
user['likes birds'] = false
console.log(user)

//PROPIEDADES CALCULADAS -> Usar corchete en un objeto literal
let fruit = 'apple'

let bag = {
  [fruit]: '🍌', //Toma la clave de la propiedad `fruit`
}
console.log(bag) //🍌 o apple: '🍌'

//ATAJOS PARA VALORES DE PROPIEDAD
function makeUser(name, age) {
  return {
    name,
    age,
  }
}

let $user = makeUser('Johana', 29)
console.log($user)

//COMPROBAR OBJETOS
console.log('power' in $user)

//RECORRER OBJETOS

//for...in
const otherUser = {
  name: 'Pepito',
  age: 25,
  isAdmin: true,
}

for (let key in otherUser) {
  //claves
  console.log(key)
  //valores
  // console.log(otherUser[key])
}


