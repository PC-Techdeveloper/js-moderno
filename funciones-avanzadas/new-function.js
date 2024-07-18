//Otra alternativa para crear funciones -> No es muy común

const sayHi = new Function('name', 'return "Hola " + name')

const result = sayHi('Juan')
console.log(result)
