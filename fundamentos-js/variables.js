/*
DEFINICIÓN DE VARIABLES: Una variable es un “almacén con un nombre” para guardar datos. Podemos usar variables para almacenar golosinas, visitantes, y otros datos.

let ✅ RECOMENDADO
var ❌ NO RECOMENDADO
const ✅ RECOMENDADO
*/

let message = 'Hola JavaScript 👋'
console.log(message)

//Reescribir la variable secondMessage
let secondMessage
secondMessage = 'Hola NodeJS👋'
secondMessage = 'Hola React 👋'
console.log(secondMessage)

//Múltiples variables en una misma línea
let $user = 'John',
  $age = 30,
  $role = 'admin'
console.log($user, $age, $role)

//Copiar dos datos de una a la otra
let $firstName = 'Aprendiend JS ☑'
let $thirdMessage = $firstName
console.log($firstName, $thirdMessage)

/*
Constantes: Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error. Es buena práctica escribirlas en mayúsculas.
*/

const MY_BIRTHDAY = '07/05/2025'
console.log(MY_BIRTHDAY)
