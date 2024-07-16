/*
PROGRAMACIÓN ORIENTADA A OBJETOS
*/

//Clase -> La clase es el concepto abstracto de un objeto, mientras que el objeto es una instancia de la clase.

//Instanciar una clase -> Es la acción de crear un nuevo objeto basado en una clase.

//Declaración de una clase
class Animal {
  //Propiedades
  name = 'Garfield'
  type = 'Cat'

  //Métodos
  hablar() {
    return 'Odio los lunes 😡'
  }
}

//Instanciar un objeto de una clase
let pato = new Animal()

console.log(pato.hablar())

//La palabra clave this -> Hace referencia al OBJETO INSTANCIADO y NO A LA CLASE.

class secondAnimal {
  name //Propiedad -> Variable sin un valor definido

  constructor(name) {
    this.name = name // Referencia a la propiedad 'name' del objeto instanciado
  }
}

function hello() {
  return this
}

hello()

const object = { hello }
console.log(object.hello() === object)

/*
PROPIEDADES DE CLASE -> Las CLASES, siendo estructuras para guardar y almacenar información, tienen unas VARIABLES que se encuentran dentro de la clase, a esto se le denomina PROPIEDAD o PROPIEDAD DE CLASE. 
*/

class Personaje {
  name //Propiedad si definir el valor
  type = 'Player'
  lifes = 5
  energy = 10

  constructor(name) {
    this.name = name //Modificando el valor de la propiedad 'name'
    console.log(`Bienvenido/a ${this.name} a la partida!`) //Accediendo a la propiedad
  }
}

const mario = new Personaje('Mario')

/*
VISIBILIDAD DE PROPIEDADES DE CLASE

- Propiedad pública: 'name' o 'this.name', se puede acceder a la propiedad desde dentro o fuera de la clase.

- Propiedad privada: '#name' o 'this.#name', solo se puede acceder a la propiedad desde dentro de la clase.
*/

//Propiedad pública

class SecondPersonaje {
  name // <- Propiedad pública
  energy = 10

  constructor(name) {
    this.name = name
  }
}

let mario2 = new SecondPersonaje('Mario')
mario2.name //'Mario'
mario2.name = 'Luigi'
console.log(mario2.name) //'Luigi'

//Propiedad privada

class ThirdPersonaje {
  #name // <- Propiedad privada
  energy = 10

  constructor(name) {
    this.#name = name
  }
  //Desde un método de la clase se puede acceder.
  getName() {
    return this.#name
  }
}

let luigi = new ThirdPersonaje('Luigi')
// luigi.#name //❌ Error -> No se puede acceder a la propiedad privada
// luigi.#name = 'Mario' // ❌ Error -> No se puede acceder a la propiedad privada
console.log(luigi.getName()) //'Luigi' ✅

/*
ÁMBITOS DE PROPIEDADES DE CLASE 

- Ámbito de métodos: Si se declaran propiedades dentro de un método con let o const, estos elementos existirán sólo en el MÉTODO en cuestión. Además, no serán accesibles desde fuera del método.

- Ámbito de clases: Las propiedades tendrán alcance en toda la clase, por lo que permite acceder a ellas tanto desde el constructor, como de otros métodos de clase.

*/

//Ámbito de métodos
class Character {
  constructor() {
    const name = 'Mario'
    console.log(`Constructor: ${name}`)
  }

  method() {
    console.log(`Method: ${name}`)
  }
}

const character = new Character()
character.name // <- undefined

//Ámbito de clases
class Character2 {
  name = 'Manz'
  constructor() {
    this.name = 'Manz'
    console.log(`Constructor: ${this.name}`)
  }

  method() {
    console.log(`Method: ${this.name}`)
  }
}

let character2 = new Character2()
character2.name // <- 'Manz'
character2.method() // Method: Manz

/*
Para evitar que estas propiedades de clase se puedan modificar desde fuera de la clase, añade el # antes del nombre de la propiedad al declararla. De esta forma serán propiedades privadas, y sólo se podrá acceder a ellas desde el interior de los métodos de la clase.
*/

//PROPIEDADADES CONMUTADAS

/*
Propieadd getters -> Permite pequeñas modificaciones sobre las propiedades ya existentes.
*/

class SecondCharacter {
  name
  energy

  constructor(name, energy = 10) {
    this.name = name
    this.energy = energy
  }

  getStatus() {
    return `🌟`.repeat(this.energy)
  }
}

const firstCharacter = new SecondCharacter('Mario')
console.log(firstCharacter.getStatus())

/*
Propiedad setters -> Modificar ligeramente ciertos elementos de forma automática y organizada.
*/

class ThirdCharacter {
  name
  energy

  constructor(name, energy = 10) {
    this.name = name
    this.energy = energy
  }

  get status() {
    return '⭐'.repeat(this.energy)
  }

  set status(stars) {
    this.energy = stars.length
  }
}

const segundo_personaje = new Personaje('pepito')
segundo_personaje.status = '⭐⭐⭐'
console.log(segundo_personaje.status)
console.log(segundo_personaje.energy)

/*
MÉTODOS DE CLASE: Son funciones que existen en el interior de una clase. Son útiles para realizar acciones específicas dentro de la clase.
*/
function sayHi() {
  return 'Hola'
}

//Forma corta
class Duck {
  sayHi() {
    return 'Cuak! 🦆'
  }
}

const duck = new Duck()
console.log(duck.sayHi())

//Forma larga
class SecondDuck {
  sayHi = function () {
    return 'Cuakkk! 🦆'
  }
}

let secondDuck = new SecondDuck()
console.log(secondDuck.sayHi())

/*
CONSTRUCTOR DE CLASE: Una clase solo puede tener un constructor, y en el caso de que no se declare ninguno, tendrá un constructor vacío de forma implícita.
*/

class ThirdDuck {
  constructor() {
    console.log(`Ha nacido un duck 🦆`)
  }

  greets() {
    return `CUAKKK! 🦆`
  }
}

const thirdDuck = new ThirdDuck() //Se ejecuta implicitamente el constructor
console.log(thirdDuck.greets()) //Se ejecuta explícitamente el método 'greets'

/*
MÉTODO ESTÁTICO: Un método estático es un método que se puede acceder a través de la clase, sin necesidad de crear una instancia de la clase.
*/

class FourAnimal {
  static sayGoodbye() {
    return 'Adiós'
  }

  sayHi() {
    return 'Hola'
  }
}

console.log(FourAnimal.sayGoodbye())

const otroPato = new FourAnimal()
//Para los métodos estáticos, requiere una instancia de la clase
console.log(otroPato.sayHi())

/*
INICIALIZACIÓN ESTÁTICA: Tiene acceso a propiedades estáticas, pero no a propiedades de clase, necesitan instancia de clase, por otro lado, desde el constructor se puede acceder tanto a las propiedades de clase como a las propiedades estáticas.
*/

class FiveAnimal {
  static {
    console.log('Bloque inicializado 🗒')
  }

  constructor() {
    console.log('Constructor ejecutado 🦆')
  }
}
//Aquí ↖ no aparece el bloque inicializado

const perro = new FiveAnimal() // <- Tras el FiveAnimal aparece el constructor ejecutado

/*
HERENCIA DE CLASES: Es la característica donde una clase hija obtiene propiedades y métodos de una clase padre, porque se ha establecido una relación de herencia entre la clase padre y la clase hija. Y a esto se le denomina con la palabra clave `extends`.
*/

//Clase padre
class Forma {
  constructor() {
    console.log('Soy una forma geométrica 📐')
  }
}
//Clase hija
class Cuadrado extends Forma {
  constructor() {
    super() // <- Llama al constructor de la clase padre
    console.log('Soy un cuadrado 🔲')
  }
}

const c1 = new Cuadrado()

/*
EL MÉTODO SUPER: Se encarga de llamar al constructor de la clase padre (también denominada superclase, de ahí su nombre), por lo que funcionará en cascada e irá ejecutando primero el constructor del padre, y luego el texto del constructor del hijo.
*/

class otraForma {
  type = 'geométrica'
  color = 'naranja'

  constructor() {
    console.log('Constructor padre finalizado. ✅')
  }

  show() {
    console.log(`Soy una forma ${this.type} de color ${this.color}`)
  }

  setColor(color) {
    this.color = color
  }
}

class otroCuadrado extends otraForma {
  type = 'cuadrada' // Modifica el valor de la propiedad `type` de la clase padre.

  constructor() {
    super() // Llama al constructor de la clase padre (OBLIGATORIO)
    console.log('Constructor hijo finalizado. ✅')
  }
}

const f1 = new otroCuadrado()
f1.show() // Soy una forma cuadrada de color naranja 📙

const f2 = new otroCuadrado()
f2.setColor('amarillo')
f2.show() // Soy una forma cuadrada de color amarillo 🟨

/*
ACCEDER A MÉTODOS DEL PADRE: También se puede acceder a los métodos de la superclase, pero se debe llamar explícitamente con `super.nombreDelMetodo()`.
*/

class Padre {
  //Métodos
  soloPadre() {
    console.log('Tarea en el padre')
  }
  padreHijo() {
    console.log('Tarea en el padre')
  }
  sobreHijo() {
    console.log('Tarea en el padre')
  }
}

class Hijo extends Padre {
  padreHijo() {
    super.padreHijo()
    console.log('Tarea en el hijo')
  }

  soloHijo() {
    console.log('Tarea en el hijo')
  }

  sobreHijo() {
    console.log('Tarea en el hijo')
  }
}

const hijo1 = new Hijo()
hijo1.sobreHijo() // Tarea en el hijo
