/**
 * Object.keys -> Devuelve un array de propiedades.
 * Object.values -> Devuelve un array de valores.
 * Object.entries -> Devuelve un array de pares [propiedad, valor]
 */

const USER = {
  name: 'Pedro',
  age: 45,
  isAdmin: false,
  email: 'pedro@gmail.com',
}

//Bucle sobre los valores.
for (let value of Object.values(USER)) {
  console.log(value)
}

//TRANSFORMANDO OBJJETOS

let $prices = {
  apples: 1.99,
  oranges: 2.99,
  bananas: 3.99,
}

//Convertir precios a array - cada  par clave-valor en otro par
//Y luego fromEntries para devovler un objeto nuevo
let $doublePrices = Object.fromEntries(Object.entries($prices).map(([key, value]) => [key, value * 2]))

console.log($doublePrices)
