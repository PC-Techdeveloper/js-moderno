/*
try...catch implícito:

El código de un ejecutor de promesas y de manejadores de promesas tiene embedido un 'try...catch' invisible. Si ocurre una excepción, está es atrapada y es tratada como un rechazo.
*/

new Promise((resolve, reject) => {
  throw new Error('Whoops! Ha ocurrido un error. ❌')
}).catch((error) => {
  console.log(error.message)
})

//Es lo mismo que
new Promise((resolve, reject) => {
  reject(new Error('Whoops! Ha ocurrido nuevamente un error. ❌'))
}).catch((error) => {
  console.log(error)
})

//.then
new Promise((resolve, reject) => {
  resolve('Ok! ✅')
})
  .then((result) => {
    throw new Error('Whoops! ❌')
  })
  .catch((error) => {
    console.log(error.message)
  })
