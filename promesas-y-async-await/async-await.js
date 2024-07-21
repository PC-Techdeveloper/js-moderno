//Function async -> Función que devuelve una promesa asincrónica.
async function f() {
  return 1
}

f().then((res) => console.log(res))

//Function async-await -> Espera a que una promesa se resuelva.
async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('¡Hecho ✅!'), 3000)
  })
  //await hace que espere hasta la promesar responda y devuelva el resultado.
  let result = await promise
  console.log(result)
}

f2()

//Métodos de clase async
class Waiter {
  async wait() {
    return await Promise.resolve(1)
  }
}

new Waiter().wait().then((res) => console.log(res))

//Manejo de errores con async y await
async function f3() {
  throw new Error('¡Woof! 🐶')
}

f3()
