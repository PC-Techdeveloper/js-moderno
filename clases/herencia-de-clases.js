/*
Herencia de clases -> La herencia de clases es el modo para que una clase extienda o herede a otra clase. De esta manera podemos añadir nuevas funcionalidades a la clase existente.
*/

class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }
  run(speed) {
    this.speed = this.speed
    return `El animal ${this.name} está corriendo a ${speed} km/h`
  }
  stop() {
    this.speed = 0
    return `El animal ${this.name} se ha parado`
  }
}

let animal = new Animal('Perro')

//Creando una clase hija que extiende la clase padre
class Rabbit extends Animal {
  //Nueva funcionalidad
  hide() {
    return `El ${this.name} se ha escondido`
  }
}

let rabbit = new Rabbit('Conejo')
console.log(rabbit.run(10))
