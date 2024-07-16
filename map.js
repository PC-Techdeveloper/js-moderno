/*
¿QUÉ ES UN MAP? -> Un map es un objeto que almacena pares clave-valor, es decir, una colección de pares de claves y valores.
*/

const emptyMap = new Map()
console.log(emptyMap)

const map1 = new Map([
  ['name', 'John'],
  ['age', 30],
])

console.log(map1.get('name'))

//MÉTODOS

/*
Establecer elementos -> set() fija un par clave-valor en el mapa.
- Si se usa set() para una clave que NO EXISTE, se añade el mapa.
- Si se usa set() para una clave que YA EXISTE, la sobreescribe.

* Los Map pueden utilizar como clave cualquier tipo de dato. En el caso de los objetos se utiliza un string o un symobol.
*/
const map2 = new Map()
map2.set(5, 'cinco')
map2.set('A', 'letra A')
//Sobreescribe el anterior
map2.set(5, 'cinco sobreescrito')
console.log(map2)

//Comprobar si existen (has) 
const map3 = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']])
console.log(map3.has(1))
console.log(map3.has('dos'))
console.log(map3.has(3))

//Borrar elementos (delete)
console.log(map3.delete(1))

//Vacíar conjunto (clear)
// console.log(map3.clear())
console.log(map3.size)

//Convertir a array
const map4 = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']])
console.log(map4.size)
//structuredClone() clona la estructura si tiene elementos anidados.
const entries = [...structuredClone(map4)]
console.log(entries)

const map5 = new Map(entries)
console.log(map5)
//Pasando a objeto
const object = Object.fromEntries(entries)
console.log(object)
