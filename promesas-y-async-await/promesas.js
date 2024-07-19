/*
Las promesas en JavaScript son objetos que representan la eventual finalización (O FALLA) de una operación asincrónica y su valor resultante.
*/

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('Error! ❌')
  }, 3000)
})

//CONSUMIDORES: THEN, CATCH, FINALLY ⬇️
//.then se utiliza para ejecutar la promesa si ha sido resuelta con éxito
promise
  .then((result) => console.log(result))
  //En caso de que la promesa falle.
  .catch((error) => console.log(error))
  //finally se ejecuta siempre así tenga exito o fracase la promesa.
  .finally(() => console.log('La promesa ha finalizado 🍌!'))
