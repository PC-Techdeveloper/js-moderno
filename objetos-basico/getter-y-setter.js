/**
 * Getter y Setter:
 * Las propiedades de acceso se construyen con métodos de obtención (getter) y asignación (setter). En un objeto literal, se denotan con get y set.
 */

let user = {
  name: 'Juan',
  surName: 'Perez',

  //Obteniendo el valor de la propiedad
  get fullName() {
    return `${this.name} ${this.surName}`
  },

  set fullName(value) {
    ;[this.name, this.surName] = value.split(' ')
  },
}

//Setter permite cambiar el valor de la propiedad
user.fullName = 'Alice Cooper'

console.log(user.fullName)

/**
 * DESCRIPTORES DE ACCESO:
 * Los descriptores de propiedades de acceso son diferentes de aquellos para las propiedades de datos. Un descriptor puede tener:

 * - get -> Una función sin argumentos, que funciona cuando se lee una propiedad.
 * - set -> Una función con un argumento, que se llama cuando se establec la propiedad.
 * - enumerable -> Lo mismo que para las propiedades de datos.
 * - configurable -> Lo mismo que para las propiedades de datos.
 */

let user2 = {
  name: 'Roger',
  surName: 'Rodriguez Calderón',
}
//Definiendo el descriptor de acceso -> Object.defineProperty
Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surName}`
  },
  set(value) {
    ;[this.name, this.surName] = value.split(' ')
  },
})

console.log(user2.fullName)

for (const key in user2) {
  console.log(key)
}

//GETTER Y SETTER MÁS INTELIGENTES
let user3 = {
  get name() {
    return this._name
  },

  set name(value) {
    if (value.length < 4) {
      console.log('El nombre es demasiado corto, al menos debe tener 4 caracteres ❌')
    }
    this._name = value
  },
}

user3.name = 'Peter'
console.log(user3.name)

//USO PARA COMPATIBILIDAD
class User {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
  }
}

Object.defineProperty(this, 'age', {
  get() {
    let todayYear = new Date().getFullYear()
    return todayYear - this.birthday.getFullYear()
  },
})

let sofia = new User('Sofia', new Date(1992, 6, 1))

console.log(sofia.birthday)
console.log(sofia.age)
