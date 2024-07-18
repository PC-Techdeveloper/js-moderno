//Las clases integradas son extendibles así como los arrays, mapas, objetos y funciones

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50, 80)
console.log(arr.isEmpty())

let filteredArr = arr.filter((item) => item >= 10)
console.log(filteredArr)
console.log(filteredArr.isEmpty())
