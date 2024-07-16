//Función constructora
function User(name) {
  this.name = name
  this.isAdmin = false
}

let user = new User('Natalia')
console.log(user.isAdmin)

//MÉTODOS EN CONSTRUCTORES
function SecondUser(name, age) {
  this.name = name
  this.age = age

  this.sayHi = function () {
    return `Hola! Soy ${this.name} y tengo ${this.age} años`
  }
}

const user2 = new SecondUser('Ana', 25)
console.log(user2.sayHi())
