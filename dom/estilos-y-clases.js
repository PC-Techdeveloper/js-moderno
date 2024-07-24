/*
JavaScript puede modificar ambos, clases y las propiedades de style.

className y classList:

-- className -> Obtiene y establece el valor del atributo class elemento específicado.
-- classList -> Es un objeto especial con métodos para agregar, eliminar y alterar (add/remove/toggle) en una sola clase.
*/

console.log(document.body.className);

console.log(document.body.classList.add('article'));

/*
MÉTODOS DE CLASSLIST -> classList es iterable, podemos listar todas las clases con for...of.

elem.classList.add/remove('class) -> Agrega o remueve la clase.
elem.classList.toggle('class') -> Agrega la clase si no existe, si no la remueve.
elem.classList.contains('class) -> Verifica si tiene la clase dada, devuelve true/false.
*/

for (const name of document.body.classList) {
  console.log(name);
}

//Style de un documento.
document.body.style.backgroundColor = 'purple';

//Resetando la propidad Style <- Oculta el contenido del body
// setTimeout(() => {
//   document.body.style.display = 'none';
// }, 3000);

//Método especial para resetear el style <- removeProperty('style property)
setTimeout(() => {
  document.body.style.removeProperty.removeProperty('background-color');
}, 4000);
