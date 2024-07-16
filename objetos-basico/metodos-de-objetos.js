let user = {
  name: 'Ana',
  age: 51,
}
//Método
user.sayHi = function () {
  console.log('Hola! Soy un método ☑')
}

user.sayHi()

//FORMAS ABREVIADAS PARA LOS MÉTODOS
user = {
  greet() {
    return 'Hola! JavaScript Moderno ☑'
  },
}

console.log(user.greet())

//`THIS` EN MÉTODOS
let user2 = {
  name: 'Miguel Ángel Durán',
  age: 25,

  //`this` es el objeto actual
  sayHi() {
    return `Hola! Soy ${this.name} y tengo ${this.age} años`
  },
}

console.log(user2.sayHi())
