//Permite crear una nueva función en medio de cualquier expresión
const sayHi = function () {
  console.log('Hola JavaScript!👋')
}

//Copiar una función a otra variable
let func = sayHi
func()

//FUNCIONES CALLBACK -> Funciones dentro de otras Funciones
function ask(question, yes, no) {
  if (console.log(question)) yes()
  else no()
}

function showOk() {
  console.log('Estas de acuerdo ✅')
}

function showCancel() {
  console.log('Cancelaste ❌')
}

//Funciones showOk y showCancel son callback pasadas como Argumentos
ask('¿Estás de acuerdo?', showCancel, showOk)
