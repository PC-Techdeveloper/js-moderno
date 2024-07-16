/*
Los sets son colecciones de elementos únicos, sin ningún orden ya que es una estructura que no permite valores repetidos.
*/

//Propiedad size -> Devuelve el tamaño del set.
const set1 = new Set([5, 6, 7, 8, 9]);
console.log(set1.size);

//MÉTODOS

//add() -> Agrega un elemento al set.
const set2 = new Set([5, 6, 7, 8, 9]);
set2.add(10);
console.log(set2);

/*
COMPROBAR SI EXISTEN (HAS) -> Devuelve un boolean, por lo que si existe, devolverá true. De lo contrario, devolverá false.
*/
const set3 = new Set([1, 2, 3]);
console.log(set3.has(1));

/*
BORRAR ELEMENTOS -> Borrar elementos de un conjunto con el método delete().
*/
const set6 = new Set([1, 2, 3]);
console.log(set6.delete(1));

//Vaciar conjunto (clear) -> La función clear() borra todos los elementos del conjunto.

const set7 = new Set([1, 2, 3]);
set7.clear();
console.log(set7);

//Convertir a array -> Convertir un set a un array.
const set8 = new Set([5, 'A', [99, 19, 24]]);
const clonedArray = [...structuredClone(set8)];
const array8 = [...set8];
console.log(clonedArray);
console.log(array8);

/*
¿QUÉ SON LOS WEAKSETS? -> Los weakset, son otro tipo de estructura de conjuntos, muy similar a set (También impide intruducir elementos duplicados).
*/

let element = { name: 'John' };

const set9 = new WeakSet([element]);
console.log(set9.has(element));

/*
OPERACIONES DE CONJUNTOS -> Operaciones de conjuntos, como unión, intersección, diferencia, y exclusion.

-- Unión -> Es la suma de todos los elementos del conjunto A y el conjunto B.
-- Intersección -> Es la parte común de los elementos de los conjuntos A y B.
-- Diferencia -> Son los elementos del conjunto A quitándole los comunes del conjunto B.
-- Exclusión -> Son los elementos del conjunto A que no están en el conjunto B.
*/

//Con datos primitivos

//Unión de conjuntos
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([4, 5, 6, 7, 8]);

const unionSet = new Set([...firstSet, ...secondSet]);
console.log(unionSet);

/*
Intersección de conjuntos -> Crear un conjunto que tenga los elementos comunes entre el primer y el segundo conjunto.
*/

const commonElements = new Set([...firstSet].filter((element) => secondSet.has(element)));

const set10 = new Set([commonElements]);
console.log(set10);

/*
Diferencia de conjuntos -> Los elementos del primer conjunto que NO están en el segundo conjunto.
*/

const differenceSet = new Set([...firstSet].filter((element) => !secondSet.has(element)));
console.log(differenceSet);

/*
Exclusión de conjuntos -> Aquellos elementos que NO están en AMBOS conjuntos, es decir, que están en el primer conjunto, o que están sólo en el segundo conjunto.
*/

const exclusionSet = new Set([...firstSet].filter((element) => secondSet.has(element)));
console.log(exclusionSet);

//Con datos de objetos

const thirdSet = new Set([
  { name: 'JavaScript', version: 'ES6' },
  { name: 'Css', version: '3' },
  { name: 'React', version: '16' },
  { name: 'Node', version: '12' },
  { name: 'MongoDB', version: '4' },
  { name: 'Express', version: '4' },
  { name: 'Git', version: '2' },
  { name: 'MySQL', version: '8' },
  { name: 'PostgreSQL', version: '12' },
]);

const fourSet = new Set([
  { name: 'JavaScript', type: 'Node' },
  { name: 'Php', type: 'Server' },
  { name: 'Css', type: 'Client' },
  { name: 'React', type: 'Client' },
  { name: 'Node', type: 'Server' },
  { name: 'MongoDB', type: 'Server' },
  { name: 'Express', type: 'Server' },
  { name: 'Git', type: 'Client' },
  { name: 'MySQL', type: 'Server' },
  { name: 'PostgreSQL', type: 'Server' },
]);

const mySet = new Set([...firstSet, ...secondSet, ...thirdSet, ...fourSet]);
console.log(mySet);
