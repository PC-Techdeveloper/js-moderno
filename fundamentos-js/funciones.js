/*
FUNCIONES: Permiten definir un bloque de código que se ejecutará cuando se llame a la función
*/

//Declaración de una función
function showMessage() {
  console.log('Hola JavaScript!👋');
}

//Lllamada a la función
showMessage();

//VARIABLES LOCALES -> Las variables declaradas DENTRO de una función son locales

function secondShowMessage() {
  let message = 'Hola! Soy JavaScript!👋';
  console.log(message);
}

secondShowMessage();

//VARIABLES EXTERNAS -> Las variables declaradas EN EL ESCRITOR son externas
const USER_NAME = 'Leonardo';

function thirdShowMessage() {
  let message = 'Soy JavaScript!👋';
  console.log(`Hola ${USER_NAME} ${message}!`);
}

thirdShowMessage();

//FUNCIONES POR PARÁMETROS -> Variables dentro de los paréntesis
//ARGUMENTOS -> Es el valor que se le pasa a una función cuando es llamada

//Parámetros
function sayHi(name, from) {
  console.log(`Hola ${name}, soy de ${from}!`);
}

//Argumentos
sayHi('Ana', 'México');

//VALORES PREDETERMINADOS O POR DEFECTO
function message(from, text = 'Sin texto') {
  console.log(`Hola ${from}: ${text}!`);
}

message('Ana');

//FUNCIONES QUE DEVUELVEN UN VALOR -> return
function sum(a, b) {
  return a + b;
}

console.log('La respuesta es: ' + sum(2, 3));

//Específicar return solamente hace que se detenga la ejecución de la función
function showMovie(age) {
  return;
}
