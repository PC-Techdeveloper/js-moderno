/* MODELAR A TRAVÉS DE OBJETOS === ABSTRACIÓN La abstracción es una manera de reducir la complejidad y permitir una mejor comprensión del sistema.

! Modularidad y código reutilizable.
! Capacidad de modelar problemas a través de objetos.

! Suporte que garanticen algunos principios en la modularidad y la reusabilidad del código.
? POO -> Programación Orientada a Objetos <- PRINCIPIOS
* Encapsulamiento -> Capacidad de concentrar datos y comportamientos en un único lugar.

* Herencia -> Capacidad de heredar comportamientos de otros objetos lo que permite reutilizar código.

* Polimorfismo -> Capacidad de definir múltiples comportamientos para un mismo objeto.

? Características de los objetos:

* Asociación de datos: La capacidad de referenciar a otros objetos.
* Agregación: La capacidad de agregar datos a un objeto independiente.
* Composición: La capacidad de referenciar objetos independientes.
*/
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const john = new Person('John', 'Doe');
const maria = new Person('Maria', 'Rodriguez');

//Relation -> Association
maria.parent = john;

console.log(maria);
console.log(john);

//Agregación -> Asociar objetos dependiendo del rol mayor.

const company = {
  name: 'fazt tech',
  employees: [],
};

company.employees.push(john);
company.employees.push(maria);

console.log(company);

//Composición -> Un tipo fuerte de agregación.
const person = {
  name: 'John',
  lastName: 'Doe',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA',
  },
};

//Encapsulación.
const secondCompany = {
  name: 'fazt tech',
  employees: [],
  sortEmployees: function () {},
};

//Función constructora.
function Company(name) {
  let employees = [];
  this.name = name;

  this.getEmployess = function () {
    return employees;
  };

  this.addEmployee = function (employee) {
    employees.push(employee);
  };
}

const company1 = new Company('COCA-COLA');
const company2 = new Company('PEPSI');

console.log(company1);
console.log(company2);

company1.addEmployee({ name: 'Joe' });
company2.addEmployee({ name: 'Johana' });

console.log(company1.getEmployess());
console.log(company2.getEmployess());

//Herencia -> Capacidad de crear herencias que heredan de otros objetos.
//Prototypes -> Herencia para las funciones constructoras.
function OtherPerson() {
  this.name = '';
  this.lastName = '';
}

function Programmer() {
  this.language = '';
}
//Herencia prototípica.
Programmer.prototype = new OtherPerson();

//Herendando
const programmer = new Programmer();
programmer.name = 'Christian';
programmer.lastName = 'Bernat';
programmer.language = 'JavaScript';

console.log(programmer);

const newPerson = new OtherPerson();
newPerson.name = 'Sarah';
newPerson.lastName = 'Smith';

console.log(newPerson); //Herendando con clases -> extends
class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.age = 34;
  }
}

class SecondProgrammer extends User {
  constructor(language, name, lastName) {
    super(name, lastName);
    this.language = language;
  }
  hello() {
    console.log('Hello');
  }
}

const person3 = new User('Ricardo', 'Peréz');
const programmer2 = new SecondProgrammer('Python', 'Luis', 'Garcia');

console.log(person3);
console.log(programmer2);

//Polimorfismo:

console.log(person3);
console.log(person3);

//Overloading -> Sobrecarga de métodos.

function CountItems(x){
  return x.length;
}

function CountItems2(x, y){
  return x.toString().length + y.toString().length;

}
console.log(CountItems('hello'));
console.log(CountItems2('hello', 'world'));
