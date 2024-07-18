/**
 * Desestructuracion de array:
 * Permite extraer elementos de un array en una variable.
 */

let arr = ['Will', 'Smith']
let [firstName, surName] = arr
console.log(firstName)
console.log(surName)

let [myName, mySurName] = 'John Doe'.split(' ')
console.log(myName)
console.log(mySurName)

//Ignorar elementos utilizando comas
//Elementos descartados por una coma (No deseados)
let [otherName, , title] = ['Julian', 'Cesar', 'Sara', 'Juliana']
console.log(title)

//Intercambiar variables
let $guest = 'Jane'
let $admin = 'Peter'

let $temp = ([$guest, $admin] = [$admin, $guest])

console.log($temp)

//Rest -> Devuelve un array con los elementos restantes
const [name1, name2, ...rest] = ['John', 'Jane', 'Jack', 'of the Roman Republic']
console.log(rest[0])

//VALORES PREDETERMINADOS
let [isName = 'Guest', lastName = 'Anonymous'] = ['Julius']
console.log(isName)
console.log(lastName)

/**
 * Desestructuracion de objetos:
 * Permite extraer propiedades de un objeto en una variable.
 */

const OPTIONS = {
  myTitle: 'Menu',
  width: 100,
  height: 200,
}

let { myTitle, width, height } = OPTIONS

console.log(myTitle)
console.log(width)
console.log(height)

//Cambiando el orden también funciona
let { altura, anchura, titulo } = { titulo: 'Menu', anchura: 200, altura: 100 }

console.log(titulo)
console.log(anchura)
console.log(altura)

//Cambiando el nombre a una propiedad
let secondOptions = {
  secondTitle: 'Pizza',
  width: 200,
  height: 100,
}

let { secondTitle: otherTitle, height: h, width: w } = secondOptions
console.log(otherTitle)
