let arr = [1, 2, 3]
console.log(arr.map((x) => x * 2))

//Cambiando prototipos nativos
String.prototype.show = function () {
  console.log(this)
}

'BOOM! 💥'.show()

//Préstamo de prototipos

let obj = {
  0: 'Javier',
  1: 'Mundo',
  length: 2,
}

obj.join = Array.prototype.join

console.log(obj.join(', '))
