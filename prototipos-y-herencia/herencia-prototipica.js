//Herencia de tipos
//[[Prototype]] es interna y está oculta. una de ellas es __proto__
//El prototipo solo se usa para leer propiedades.
let animal = {
  eats: true,
  walk() {
    console.log("I'm walking")
  },
}

let rabbit = {
  jumps: true,
  __proto__: animal,
}

let longEar = {
  earLength: 10,
  __proto__: rabbit,
}

longEar.walk()
console.log(longEar.jumps)

let animal2 = {
  eats: true,
  walk() {
    console.log('Estoy caminando')
  },
}

let rabbit2 = {
  __proto__: animal2,
}

rabbit.walk = function () {
  console.log('¡Conejo! ¡Salta, salta!')
}

rabbit.walk()
