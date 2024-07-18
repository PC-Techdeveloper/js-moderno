/**
 * El operador 'instanceof' permite verificar si un objeto pertenece a una clase determinada. También tiene en cuenta la herencia de clases.
 */

class Rabbit {}
let $rabbit = new Rabbit()

console.log($rabbit instanceof Rabbit)

//También funciona con funciones de constructor
function secondRabbit() {}
console.log(new secondRabbit() instanceof secondRabbit)

//Y con clases integradas
let $arr = [1, 2, 3]
console.log($arr instanceof Array)
console.log($arr instanceof Object)

/*
MÉTODOS DE VERIFICACIÓN DE TIPOS:
typeof -> Trabaja con los primitivos.

{}.toString -> Trabaja con primitivos, objetos incorporados, objetos con Symbol.toStringTag, y objetos de clases.

instanceof -> Trabaja con objetos.
*/
