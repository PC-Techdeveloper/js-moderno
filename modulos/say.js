//Export por separado de la declaración

function sayHi(user) {
  console.log(`Hola ${user}`)
}

function sayBye(user) {
  console.log(`Adiós ${user}`)
}

export { sayHi, sayBye }

export default function sayGreeting(user) {
  console.log(`Hola ${user} esto es export default ✅`)
}
