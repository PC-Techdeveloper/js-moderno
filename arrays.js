//Deestructuración de Arrays -> Separar en variables las propiedades del array
const elements = [5, 8, 6, 4, 2];
const [first, , third] = elements;
console.log(first, third); // <- 5, 6

const secondElement = [4, 6];
const [myFirst, ...mySecond] = secondElement;
console.log(myFirst, mySecond); // <- 4, [6]

//Intercambio de variables
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a, b); // <- 5, 10

//Spread (Expandir en elementos individuales)
const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array); // <- 1, 2, 3, 4, 5

//Rest (Agrupar)
const myElements = [5, 4, 3, 2, 1];
const [indexZero, ...rest] = myElements;
console.log(indexZero, rest); // <- 5, [4, 3, 2, 1]

//Reestructuración de Arrays -> Reestructurar un array y recrear arrays
const pair = [3, 4];

//Usando desestructuración + spread
const complete = [1, 2, ...pair, 5];
console.log(complete); // <- [1, 2, 3, 4, 5]

//Sin usar desestructuración
const secondComplete = [1, 2, pair, 5];
console.log(secondComplete); // <- [1, 2, 3, 4, 5]

//¿Qué es un array? -> Colección o agrupación de elementos en una misma variable
//Cada uno de ellos ubicado en una posición que ocupa el array
//En algunas ocasiones son llamados (arrays o vectores)

//Forma tradicional <- Antigua
const myThirdArray = new Array('a', 'b', 'c');
console.log(myThirdArray); // <- ['a', 'b', 'c']

//Forma moderna <- Más utilizada
const SECOND_myThirdArray = ['a', 'b', 'c', 6, true, ['d', 'e', 'f'], { g: 'h' }];
console.log(SECOND_myThirdArray);

/*
 * Acceso a elementos del array
 * .length -> Para obtener la longitud del array-
 * [pos] -> Operador que devuelve o modifica el elemento número pos del array.
 * at(pos) -> Devuelve el elemento número pos del array, números negativos en orden inverso.
 * with(pos, el) -> Método que crea una copia y modifica el elemento de la posición pos con el.
 */

//Operador []
const myArray = ['a', 'b', 'c'];
console.log(myArray.length); // <- 3
console.log(myArray[2]); // <- 'a'
myArray[0] = 225;
console.log(myArray); // <- ['225', 'b', 'c']

//Método .with() -> Modifica y encadena múltiples operaciones.
const myOtherArray = ['a', 'b', 'c'];
console.log(myOtherArray.with(1, 'Z')); // <- ['225', 'b', 'c']

//El método at() -> Devuelve el elemento número pos del array, números negativos en orden inverso 🟡.

const secondLetters = ['a', 'b', 'c'];
console.log(secondComplete.at(0));

/*
Añadir o eliminar elementos: En los arrays, JavaScript proporciona métodos tanto para insertar o eliminar elementos por el final del array, como por el principio.

- Los métodos push() y pop() actual al final del array.
- Los métodos unshift() y shift() actuan al inicio del array.

Los métodos push() y unshift() insetan los elementos pasados por parámetro en el array y devuelve el tamaño actual que tiene el array después de la inserción. Por otro lado, los métodos de extracción pop(), o shift(), extraen y devuelven el elemento extraido.
*/
const myLetters = ['a', 'b', 'c'];
console.log(elements.push('d'));
console.log(elements.pop());

console.log(myLetters.unshift('Z'));
console.log(myLetters.shift());
console.log(myLetters);

/*
Alternativas para crear arrays:

Array.from() -> Intenta convertir el obj en un array.

Array.from(obj, fmap) -> Ldem, pero ejecuta la función fmap por cada elemento. Equivalente a map().

Array.from({length: size}) -> Crea un array a partir de un object de tamaño size, relleno de undefined.

concat(e1,e2,e3) -> Devuelve los elementos pasados por parámetro concatenados al final del array.

join(sep) -> Une los elementos del array mediante separadores sep en un string.
*/

//Buscar elementos en un array
/*
includes(element) -> Comprueba si element está incluido en el array.

includes(element, from) -> Ldem, pero partiendo desde la posición from del array.

indexOf(element) -> Devuelve la posición del primer elemento en el array, o -1 si no lo encuentra.

indexOf(element, from) -> Ldem, pero partiendo desde la posición from del array.

lastIndexOf(element) -> Devuelve la posición del último elemento en el array, o -1 si no lo encuentra.

lastIndexOf(element, from) -> Ldem, pero partiendo desde la posición from del array.
*/

const NUMBERS = [1, 2, 3, 4, 5];
console.log(NUMBERS.includes(3)); // <- true
console.log(NUMBERS.includes(2, 1)); // <- false
console.log(NUMBERS.indexOf(3)); // <- 2
console.log(NUMBERS.indexOf(2, 1)); // <- 1

//Buscar al final -> lastIndexOf()
console.log(NUMBERS.lastIndexOf(4)); // <- 3
console.log(NUMBERS.lastIndexOf(1, 2)); // <- 2

//Buscar elementos en un array -> con una función llamada findElement()
const NAMES = [
  { name: 'John', age: 30 },
  { name: 'Mary', age: 25 },
  { name: 'Peter', age: 35 },
  { name: 'Sarah', age: 40 },
  { name: 'Jane', age: 28 },
  { name: 'Bob', age: 22 },
];

//Buscando el primer elemento con la edad indicada, sino devuelve -1
//Implementación imperativa -> Pasos que quiero que realice
const findElement = (arr, searchedAge) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.age === searchedAge) {
      return element;
    }
  }
  return -1;
};

console.log(findElement(NAMES, 30));
console.log(findElement(NAMES, 40));
console.log(findElement(NAMES, 50));

//Implementación declarativa -> Lo que quiero que devuelva
const secondFindElement = (arr, searchedAge) => {
  return arr.find((element) => element.age === searchedAge) ?? -1;
};

console.log(secondFindElement(NAMES, 30));
console.log(secondFindElement(NAMES, 40));
console.log(secondFindElement(NAMES, 50));

//Modificar o creear subarrays
/*
Crear subarrays, significa crear un pequeño fragmento del array original, o simplemente modificar el array original para hacer ciertos cambios, pero de forma más general y no tener que hacerlo elemento a elemento.

- slice(start, end) -> Devuelve los elementos desde la posición start hasta end (excluído).

- toSpliced(start, size) -> Idem a slice(start, size), pero sin mutar el array original.

- toSpliced(st, sz, e1, e2) -> Idem a splice(st, sz, e1, e2), pero sin mutar el array original.

- with(index, item) -> Devuelve una copia del original, con el elemento index modificado.
*/

const primerasLetras = ['a', 'b', 'c', 'd', 'e'];
console.log(primerasLetras.slice(3));
console.log(primerasLetras.slice(0, 2));
console.log(primerasLetras.slice(4, 5));
console.log(primerasLetras.slice(2, 5));
console.log(primerasLetras.slice(-2));

/*
El método slice() -> Obtiene un subarray desde una posición inicial a una final.
El método splice() -> Obtiene un subarray desde una posición inicial, con un tamaño concreto (MUTA EL ARRAY ORIGINAL).
*/

const $masLetras = ['a', 'b', 'c', 'd', 'e'];
console.log($masLetras.splice(0, 2)); // <- Altera el array original <- ['a', 'b']

const $masLetras2 = ['a', 'b', 'c', 'd', 'e'];
console.log($masLetras2.splice(2, 1)); // <- Altera el array original <- ['c']

//toSpliced() -> No altera el array original
const $masLetras3 = ['a', 'b', 'c', 'd', 'e'];
console.log($masLetras3.toSpliced(0, 2)); // <- ['c']

/*
DIFERENCIAS ENTRE SLICE() y SPLICE()

- Slice() y concat() -> No modifica el array.
- Splice() y desestructuración -> Modifica el array.
*/

const NUMBERS_ONE = [1, 2, 3, 8, 9, 10];
const MIDDLE_PART = [4, 5, 6, 7];

const FIRTS_PART = NUMBERS_ONE.slice(0, 3);
const LAST_PART = NUMBERS_ONE.slice(3, 6);
console.log(FIRTS_PART, LAST_PART);

FIRTS_PART.concat(MIDDLE_PART, LAST_PART);
//No ha mutado
console.log(NUMBERS_ONE);

/*
REDUCIR EL TAMAÑO DE UN ARRAY -> slice() o reduce()
*/
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NUEVOS_NUMEROS = NUMEROS.slice(0, 4);
console.log(NUEVOS_NUMEROS);

//Mediante length
NUEVOS_NUMEROS.length = 4;
console.log(NUEVOS_NUMEROS);

/*
RELLENAR UN ARRAY CON FILL() -> Altera el array
*/
const $letras = ['a', 'b', 'c', 'd', 'e'];
console.log($letras.fill('Z', 0, 3));

/*
CREAR MODIFICACIÓN CON WITH() -> Podemos hacer una pequeña modificación en un array,  sin alterar el array original.
*/

const $equiposDeFutbol = ['Barcelona', 'Real Madrid', 'Atletico Madrid', 'Real Betis'];

//Modificando el elemento de la posición 0
$equiposDeFutbol[0] = 'Perú';
console.log($equiposDeFutbol);

/*
ORDENACIÓN DE UN ARRAY:

- reverse() -> Invierte el orden de elementos del array (MUTA EL ARRAY ORIGINAL).
- toReversed() -> Devuelve una copia del array, con el orden de los elementos invertidos (NO MUTA EL ARRAY ORIGINAL).
- sort() -> Ordena los números en orden alfabético (MUTA EL ARRAY ORIGINAL).
- sort(criterio) -> Idem, pero bajo el criterio de orden indicado por function (MUTA EL ARRAY ORIGINAL).
- toSorted() -> Devuelve una copia del array, con los elementos ordenados (NO MUTA EL ARRAY ORIGINAL).
- toSorted(criterio) -> Ordenado por el criterio establecido por parámetro (NO MUTA EL ARRAY ORIGINAL).
*/

const $teams = ['Barcelona', 'Real Madrid', 'Atletico Madrid', 'Real Betis'];
const reversedTeams = $teams.toReversed();
console.log(reversedTeams);
console.log($teams);

const $names = ['John', 'Mary', 'Peter', 'Sarah', 'Jane', 'Bob'];
const sortedNames = $names.toSorted();
console.log(sortedNames);
console.log($names);

/*
FUNCIÓN DE COMPARACIÓN -> Una función de ordenación o una función de comparación, lo que hacen es establecer un criterio de ordenación diferente al que actúa por defecto, personalizando a través de una función que se le pasa por parámetro al método sort() o toSorted().
*/
const $numbers = [1, 8, 2, 32, 9, 4, 5, 6, 7, 10];
const alphabeticallyOrdered = (a, b) => a + b;
const naturalOrdered = (a, b) => a - b;

const alphaNumbers = $numbers.toSorted(alphabeticallyOrdered);
const naturalNumbers = $numbers.toSorted(naturalOrdered);
console.log(alphaNumbers);
console.log(naturalNumbers);

/*
ARRAY FUNCTIONS: Métodos de arrays.
*/

//forEach() -> Para cada elemento del array, ejecuta una función 🟨.
const letras = ['a', 'b', 'c', 'd', 'e'];

//Con funciones por expresión
const f = function () {
  console.log('Un elemento');
};
letras.forEach(f);

//Con funciones anónimas
letras.forEach(function () {
  console.log('Un elemento');
});

//Con funciones flecha
letras.forEach(() => console.log('Un elemento'));

/*
Parámetros opcionales:

- Si se le pasa un primer parámetro, este será el elemento del array.
- Si se le pasa un segundo parámetro, este será la posición del array.
- Si se le pasa un tercer parámetro, este será el array en cuestión.
*/

letras.forEach((element) => console.log(element));
letras.forEach((element, index) => console.log(element, index));
letras.forEach((element, index, array) => console.log(element, index, array));

/*
El método every() (TODOS) -> Permite comprobar si a todos y cada uno de los elementos de un array cumplen la condición que se especifique en la función callback.
*/
const letras2 = ['a', 'b', 'c', 'd', 'e'];

console.log(letras2.every((letras) => letras.length === 1));

/*
El método some() -> Comprobar si al menos uno de los elementos del array, cumplen con dicha condición definida por la función callback.
*/

const letras3 = ['a', 'bb', 'c', 'd', 'e'];
//Dos caracteres -> bb
console.log(letras3.some((letra) => letra.length === 2));

/*
TRANSFORMADORES Y FILTROS:
*/

//Map() -> Transforma cada elemento del array, devolviendo un nuevo array con los resultados.
const names1 = ['John', 'Mary', 'Peter', 'Sarah', 'Jane', 'Bob'];
//Devuelve la longitud de cada nombre
const nameSizes = names1.map((name) => name.length);
console.log(nameSizes);

//filter() -> Filtrar los elementos de un array, devolviendo un nuevo array con SÓLO los elementos que se desea.
const names2 = ['John', 'Mary', 'Peter', 'Sarah', 'Jane', 'Bob'];
//Duelve sólo los nombres que empiezan por J
const filteredNames = names2.filter((name) => name.startsWith('J'));
console.log(filteredNames);

/*
BÚSQUEDAS: Médiante los siguientes métodos, podemos realizar búsquedas de elementos concretos, ya sea buscando desde el principio o desde el final, así como queriendo quedarnos con el elemento buscado o la posición del mismo.
*/

//find() y findIndex() -> Buscar un elemento en un array, devolviendo el elemento o la posición del mismo.
const names3 = ['John', 'Mary', 'Peter', 'Sarah', 'Jane', 'Bob'];
names3.find((name) => name.length === 5);
console.log(names3.findIndex((name) => name.length === 5));

/*
ACUMULADORES: Los acumuladores permiten realizar tareas por cada elemento del array, acumulando valores para hacerles una modificación en cada iteración.
*/

//reduce() -> Acumular un valor a través de un array, devolviendo un único valor.
//reduceRight() -> Acumulador de elementos de derecha a izquierda.
const numbers = [1, 2, 3, 4, 5];
numbers.reduce((first, second) => {
  console.log(`F=${first}, S=${second}`);
  return first + second;
});

numbers.reduceRight((first, second) => {
  console.log(`F=${first}, S=${second}`);
  return first + second;
});
