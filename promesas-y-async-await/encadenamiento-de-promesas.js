/*
El encadenamiento de promesas permite que cada operación espere a que la anterior se complete antes de continuar, lo que facilita la gestión de flujos de trabajo asincrónicos complejos.
*/

//El resultado pasa por el manejador .then
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
})
  .then(function (result) {
    console.log(result) // 1
    return result * 2
  })
  .then(function (result) {
    console.log(result) // 2
    return result * 2
  })
  .then(function (result) {
    console.log(result) // 4
    return result * 2
  })

/*
  DEVOLVIENDO PROMESAS 🟨
  */
