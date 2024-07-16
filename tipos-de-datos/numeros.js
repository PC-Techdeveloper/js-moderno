//toString(base): Devuelve la representación NUM en una cadena de texto
let $num = 255
console.log($num.toString(16))
console.log($num.toString(36))

/*
REDONDEO: 

- Math.floor -> Redondea hacia abajo.
- Math.cell -> Redondea hacia arriba.
- Math.round -> Redondea hacia el valor más cercano.
Math.trunc -> Remueve lo que haya tras el punto decimal sin redondear.
*/

//Redondea a dos dígitos tras el decimal -> Multiplicar por 100 y dividir por 100
const NUM = 1.23456
console.log(Math.round(NUM * 100) / 100)
//Método toFixed -> Redondea a un número de decimales (Retorna un string)
const NUM2 = 12.58
console.log(NUM2.toFixed(2))

/*
TESTS: IsFinite e isNaN

- Infinity y -Infinity -> Es un valor numérico especial que es mayor (menor) que otra cosa.
- NaN -> Es un valor numérico especial que representa un error (No un número).
*/
console.log(isNaN(NaN))
console.log(isNaN('string'))
console.log(NaN === NaN)

console.assert(isFinite(Infinity))
console.log(isFinite('15'))
console.log(isFinite('str'))

//CONVERTIR STRINGS A VALORES NÚMERICOS
//ParseInt y parseFloat -> Devuelve un entero y un flotante respectivamente
console.log(parseInt('15'))
console.log(parseFloat('15.4'))

//OTRAS FUNCIONES MATEMÁTICAS
/*
- Math.random -> Devuelve un número aleatorio entre 0 y 1 (NO INCLUYE EL 1)
- Math.max -> Devuelve el número mayor entre varios números
- Math.min -> Devuelve el número menor entre varios números
- Math.pow -> Devuelve el resultado de la potencia
- Math.sqrt -> Devuelve la raíz cuadrada
- Math.abs -> Devuelve el valor absoluto
*/

console.log(Math.random())
console.log(Math.max(1, 2, 3, 4, 5))
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(9))
console.log(Math.abs(-5))
