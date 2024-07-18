//f.prototype -> Es una propiedad regular

const animal = {
  eats: true,
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal
//F.prototype solo se usa en el momento 'new F'
const rabbit = new Rabbit('White Rabbit')
console.log(rabbit)
