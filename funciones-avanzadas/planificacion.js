/**
 * SetTimeout -> Ejecuta una función UNA VEZ, pasado el intervalo de tiempo.
 * setInterval -> Ejecuta una función repetidamente.
 */

function sayHi() {
  document.write('Hola Juan 👋')
}

// setTimeout(sayHi, 3000)

//Cancelando con clearTimeout <- Cancelar la ejecución
let timerId = setTimeout(() => {
  document.write('Hola Juan 👋')
}, 2000)

clearTimeout(timerId)

//setInterval
let secondTimerId = setInterval(() => {
  document.write('Hola Johana 👋')
}, 2000)

//Después de 5 segundos parar la ejecución
setTimeout(() => {
  clearInterval(secondTimerId)
}, 5000)

setTimeout(() => {
  document.write('Hola Mundo 👋')
}, 4000)
