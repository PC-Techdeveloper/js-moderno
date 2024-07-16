/*
EVENTOS: Los eventos son una forma de interactuar con el navegador, y son una forma de comunicar con el usuario.
*/

//Organizando la funcionalidad del evento

//Recursión (Patrón de programación) y pila
//Pensamiento recursivo -> Simplificar la tarea a resolver
function pow(x, n) {
  if (n === 1) {
    return x
  } else {
    return x * pow(x, n - 1)
  }
}

console.log(pow(2, 3))

//Una recursión suele ser más corta que una iteración -> Operador ternario -> ? :
function secondPow(x, n) {
  return n === 1 ? x : secondPow(x * x, n - 1)
}

console.log(secondPow(2, 3))
