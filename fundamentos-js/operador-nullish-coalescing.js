/*
OPERADOR NULLISH COALESCING: 

Devuelve el primer argumento cuanto no es Null o Undefined. En caso contrario, devuelve el segundo argumento.
*/

let $user

console.log($user ?? 'Usuario no registrado') // Usuario no registrado

let $secondUser = 'John Doe'
console.log($user ?? 'Anonymous') // Anonymous

const FIRST_NAME = null
const LAST_NAME = undefined
const NICKNAME = 'Supercoder'
console.log(FIRST_NAME ?? LAST_NAME ?? NICKNAME ?? 'Anonymous')

//COMPARACIÓN CON ||
//|| -> Devuelve el primer valor verdadero
//?? -> Devuelve el primer valor definido
console.log(FIRST_NAME || LAST_NAME || NICKNAME || 'Anonymous')

let $height = 100
console.log($height || 200) // 100
console.log($height ?? 'No hay altura') // 100

let $someValue = (1 && 2) ?? 3
console.log($someValue) // 3
