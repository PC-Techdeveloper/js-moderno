/*
Funciones por declaración -> Permite declarar una función que existirá a lo largo de todo el código.
*/
saludar(); // <- 'Hola'

function saludar() {
  return 'Hola, soy una función!';
}

console.log(typeof saludar); // <- Function

/*
Funciones por expresión -> Guardar funciones dentro de variables, para posteriormente, ejecutar dichas variables.
*/

const saludo = function () {
  return 'Hola, soy una función!';
};

saludo(); // <- 'Hola, soy una función!'

/*
Funciones como objetos -> Declarar funciones como si fueran objetos.
*/

// const saludar = new Function('return "Hola, soy una función!"');
saludar(); // <- 'Hola, soy una función!'

/*
Funciones anónimas -> Son un tipo de dato de funciones que se declara sin definir un nombre de función. alojándolas en el interior de una variable y haciendo referencia a dicha variable cada vez que se quiera utilizar.
*/
const sayHi = function () {
  return 'Hola, soy una función!';
};

sayHi(); // <- 'Hola, soy una función!'

/*
Funciones autoejecutables -> Función por expresión invocada directamente, sin necesidad de llamar su nombre (LLFE).
*/
(function (name) {
  console.log(`Hola, ${name}!`);
})('Manzano'); // <- 'Hola, Manzano!'

/*
Clausuras -> Una clausura o cierre se define como una función que encierra variables en su propio ámbito. Y que continúan existiendo.
*/
const incr = function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
};

console.log(typeof incr);
incr(); // <- 1
incr(); // <- 2
incr()(); // <- 3

/*
Funciones callback -> Es pasar una función por parámetro a otra función, de modo que esta última función pueda ejecutar la función pasada como parámetro.
*/

const action = function () {
  console.log('Función ejecutada');
};

const mainFunction = function (callback) {
  callback();
};

mainFunction(action); // <- Función ejecutada

/*
Función HOF -> Las funciones de orden superior o HOF (Higher Order Function) son funciones que toman otras funciones como parámetros o retornan funciones como resultado.
*/

const actions = function () {
  console.log('Acción ejecutada.');
};

const error = function () {
  console.error('Ha ocurrido un error');
};

const doTask = function (callback, callbackError) {
  const isError = Math.random() < 0.5;

  if (!isError) callback();
  else callbackError();
};

doTask(actions, error);

/*
Arrow function -> Las funciones flecha son una forma corta y compacta de declarar funciones. Son funciones que no tienen nombre, solo una expresión.
*/

const FUNC = () => {
  return 'Esto es una función flecha';
};

console.log(FUNC()); // <- Esto es una función flecha
