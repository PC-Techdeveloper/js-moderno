//SENTENCIA SWITCH

let a = 2

switch (a) {
  case 1:
    console.log('a es 1')
    break
  case 2:
    console.log('a es 2')
    break
  case 3:
    console.log('a es 3')
    break
  default:
    console.log('a es diferente de 1, 2 o 3')
}

//AGRUPAMIENTO CASE
let b = 4
switch (b) {
  case 4:
    console.log('Correcto')
    break
  case 3:
  case 5:
    console.log('Incorrecto, Toma una clase de matemáticas 🧮')
    break
  default:
    console.log('b es diferente de 1, 2 o 3')
}

