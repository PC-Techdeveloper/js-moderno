/*
OPERADORES BÁSICOS O ARITMÉTICOS
TÉRMINOS: Unarios, Binarios, Operandos

- Operando: Es lo que se aplican los operadores
- Operador Unario: Es el símbolo que indica el tipo de operación y se le denomina UNARIO (Si tiene un sólo operando)
- Operador Binario: Es el símbolo que indica el tipo de operación y se le denomina BINARIO (Si tiene dos operandos)

MATEMÁTICAS: 

- Suma: +
- Resta: -
- Multiplicación: *
- División: /
- Modulo o Resto (Resta de la división): %
- Exponenciación: ** -> a^b
*/

//Resto
console.log(5 % 3)
console.log(8 % 5)

//Exponenciación
console.log(2 ** 3)
//Potencia de 1/3 -> Raíz cúbica
console.log(8 ** (1 / 3))
//Potencia de 1/2 -> Raíz cuadrada
console.log(7 ** (1 / 2))

//Concatenación de cadenas con el binario +
let $concatenacion = 'Hello' + ' Framework'
console.log($concatenacion)

//Conversión númerica, unario +

//Convertir a número
console.log(+true)
console.log(+'10')
console.log(+'')

let $apples = '2'
let $oranges = '3'
console.log(+$apples + $oranges) //Concatena las cadenas

//Tratarlo como un número
console.log(+$apples + +$oranges)

//ASIGNACIÓN = -> Devuelve un valor

let a = 1
let b = 2

let c = 3 - (a = b + 1)
console.log(a)
console.log(c)

//ASIGNACIONES ENCADENADAS

let $a, $b, $c

$a = $b = $c = 2 + 2
console.log($a)
console.log($b)
console.log($c)

let $n = 2
$n += 6
$n *= 2
console.log($n)

//INCREMENTO/DECREMENTO

//Incremento -> Incrementa en 1
let counter = 1
let incrementaCounter = counter++
console.log(counter)

//DECREMENTO -> Decrementa en 1
let secondCounter = 2
let decrementaCounter = secondCounter--
console.log(secondCounter)
