/*
Una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje. Cada clase es un modelo que define un conjunto de variables —el estado—, y métodos apropiados para operar con dichos datos —el comportamiento—.
*/

//El método constructor es llamado automáticamente por la sintaxis new
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(this.name)
  }
}
//Instanciando la clase para convertirlo en un objeto.
let user1 = new User('Javier Orlando')
user1.sayHi()
console.log(typeof User)

//EXPRESIONES DE CLASE -> Pueden tener un nombre
const User2 = class {
  sayHi() {
    return 'Hola 👋'
  }
}

const user2 = new User2()
console.log(user2.sayHi())

//Crear una clase dinámicamente
function createClass(phrase) {
  return class {
    sayHi() {
      return phrase
    }
  }
}

let User3 = createClass('Clase dinámica! 💰')
console.log(new User3().sayHi())

//GETTERS Y SETTERS
class SecondUser {
  constructor(name) {
    //Invoca el setter
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4) {
      alert('Nombre demasiado corto.!')
      return
    }
    this._name = value
  }
}

let user4 = new SecondUser('Deivys')
console.log(user4.name)
