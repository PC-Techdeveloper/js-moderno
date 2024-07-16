/*
BUCLES: Permiten repertir una secuencia de instrucciones
*/

//While -> Mientras la condición sea verdadera, ejecutar el bloque

let i = 0

//Cada ejecución del bucle, se le denomina `iteración`
console.log('Inicio del bucle while:'.toUpperCase())
while (i < 5) {
  console.log(i)
  i++ //Incrementar para que no sea un bucle infinito
}

//Do-While -> Primero ejecutar el bloque, luego comprueba la condición
console.log('Inicio del bucle do-while:'.toUpperCase())
let counter = 0

do {
  console.log(counter)
  counter++
} while (counter < 3)

//for -> Iterar una secuencia de valores
console.log('Inicio del bucle for:'.toUpperCase())
for (let i = 0; i < 6; i++) {
  console.log(i)
}

//ROMPIENDO EL BUCLE -> Break
console.log('Rompiendo el bucle:'.toUpperCase())

let $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < $numeros.length; i++) {
  if ($numeros[i] === 5) {
    console.log(`¡Número ${$numeros[i]} encontrado, rompiendo el bucle!`)
    break
  }
  console.log(`Número ${$numeros[i]} no es el 5`)
}

//CONTINUANDO LA SIGUIENTE ITERACIÓN -> Continue 🟨
console.log('Continuando el bucle:'.toUpperCase())
for (let i = 0; i < $numeros.length; i++) {
  if ($numeros[i] === 5) {
    console.log(`¡Número ${$numeros[i]} encontrado, continuando el bucle!`)
    continue
  }
  console.log(`Número ${$numeros[i]} no es el 5`)
}
