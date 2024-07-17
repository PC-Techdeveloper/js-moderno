//Array.from -> Convierte un array en un iterable.

let arrayLike = {
  0: 'Hola',
  1: 'Mundo',
  length: 2,
}

let arr = Array.from(arrayLike)
console.log(arr)
