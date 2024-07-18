/*
MÉTODOS JSON, TOJSON:

- JSON.STRINGIFY(OBJETO) -> Para convertir un objeto en JSON. La estructura completa es convertida a strings.

- JSON.PARSE(CADENA) -> Para convertir JSON en un objeto.
*/

//JSON.stringify admite: object, arrays, primitives y null

let student = {
  firstName: 'Julian',
  age: 24,
  isAdmin: false,
  course: ['html', 'css', 'js'],
  spouse: false,
}

let json = JSON.stringify(student, null, 2)
console.log(json)

//Permiten objetos anidados y se convierten automáticamente a JSON (String).
let meetUp = {
  title: 'Conference',
  room: {
    number: 43,
    participants: ['Juliana', 'Ana'],
  },
}

console.log(JSON.stringify(meetUp, null, 2))

/*
EXCLUYENDO Y TRANSFORMANDO: SUSTITUTO

SINTAXIS: 
JSON.stringify(value, [replacer, space])

value: Un valor para codificar.
replacer: Array de propiedades para codificar o una función de mapeo.
space: Cantidad de espacio para usar para el formateo.
*/

//Pasando un array de propiedades, están seran codificadas.
let room = {
  number: 43,
}

let secondMeetUp = {
  title: 'Conference',
  participants: [{ name: 'Julie' }, { name: 'Carlos' }],
  place: room, // Hace referencia a la propiedad room
}

//room hace referencia a secondMeetUp
room.occupiedBy = secondMeetUp
console.log(JSON.stringify(secondMeetUp, ['title', 'participants', 'place', 'name', 'number'], 2))

//FORMATO: ESPACIO, argumento space -> Número de sangría de indentación.
let user = {
  name: 'Julian',
  age: 24,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
}

console.log(JSON.stringify(user, null, 2))

/**
 * TOJSON -> Un objeto puede proporcionar el método toJSON para conversión a JSON.
 */

let room2 = {
  number: 23,
  toJSON() {
    return this.number
  },
}

let meetup2 = {
  title: 'Conference',
  room2,
}

console.log(JSON.stringify(room2, null, 2))

console.log(JSON.stringify(meetup2, null, 2))

/**
 * JSON.parse -> Para decodificar un string JSON.
 * SINTAXIS
 * JSON.parse(str, [reviver])
 * str: Cadena JSON.
 * reviver: Función de mapeo.🟨
 */

//Array convertido en String
let numbers = '[0,1,2,3]'
numbers = JSON.parse(numbers)
console.log(numbers[1])

//Para objetos anidados
let userData = '{"name":"Julian","age":24,"roles":{"isAdmin":false,"isEditor":true}}'
let $user = JSON.parse(userData)
console.log($user.roles)

//Reactivador
let str = '{"title":"Conference","date": "2017-11-30T12:00:00:000Z"}'
let $meetUp = JSON.parse(str, function (key, value) {
  if (key === 'date') {
    return new Date(value)
  }
  return value
})

console.log($meetUp.date.getDate())
