//ToString -> Convierte un valor a una cadena
let $value = true;
let $valueToString = String($value);
console.log(typeof $valueToString);

//ToNumber -> Convierte un valor a un número
let $str = '10';
let $strToNumber = Number($str);
console.log(typeof $strToNumber);

/*
REGLAS DE CONVERSIÓN NÚMERICA

- Undefined -> NaN
- Null -> 0
- true and false -> 1 o 0
- String -> Number
*/

//Adición `+` concatenación
console.log(10 + '2'); // 102 (String)

/*
REGLAS DE VALORES BOOLEANOS

falsy -> 0, '', null, undefined, NaN
truthy -> 1, 'a', true, {}, []
*/
console.log(Boolean([]));
