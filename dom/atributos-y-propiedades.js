// Propiedades del DOM -> Los nodos del DOM son objetos de JS, podemos alterarlos

document.body.myData = {
  name: 'Cesar',
  title: 'Emperador',
};

console.log(document.body.myData.title);

//Podemos agregar un método
document.body.sayTagName = function () {
  console.log(this.tagName);
};

document.body.sayTagName();

//También podemos modificar prototipos incorporados como Element.prototype

Element.prototype.sayHi = function () {
  console.log(`Hola, yo soy ${this.tagName} 👋`);
};

document.documentElement.sayHi();
document.body.sayHi();

/*
ATRIBUTOS HTML:

elem.hasAttribute(name) -> Comprueba si exsite.
elem.getAttribute(name) -> Devuelve el valor del atributo.
elem.setAttribute(name, value) -> Asigna un valor al atributo.
elem.removeAttribute(name) -> Elimina el atributo.
elem.attribute -> Devuelve un objeto con todos los atributos (Leer los atributos).
*/

let $input = document.querySelector('input');
//Atributo -> Propiedad.
$input.setAttribute('id', 'id');
console.log($input.id);

//Propiedad -> Atributo.
$input.id = 'newId';
console.log($input.getAttribute('id'));

//Atributos no estándar -> dataset

let user = {
  nombre: 'Pete',
  edad: 25,
};

for (let div of document.querySelectorAll('[show-info]')) {
  let field = div.getAttribute('show-info');
  div.innerHTML = div[field];
}

//MODIFICANDO EL DOCUMENTO

//1. Crear un elemento (createElement -> con la etiqueta html dada).
//createTexNode -> crea un nodo de texto dado.
let div = document.createElement('div');
let textNode = document.createTextNode('Aquí estoy 👋');

//2. Crear el mensaje
div.className = 'alert';

//3. Agregar el contenido
div.innerHTML = `<strong>¡HOLA!</strong> Usted ha leído un importante mensaje 🎉`;

/*
MÉTODOS DE INSERCIÓN EN DIFERENTES LUGARES:

node.append(...nodos o strings) -> Agrega nodos o strings AL FINAL de node.
node.prepend(...nodos o strings) -> Agrega nodos o strings AL INICIO de node.
node.before(...nodos o strings) -> Agrega nodos o strings ANTES de node.
node.after(...nodos o strings) -> Agrega nodos o strings DESPUES de node.
node.replaceWith(...nodos o strings) -> Reemplaza node por nodos o strings.
*/

//Mostrar el mensaje en la página.
document.body.appendChild(div);

//Inserta el mensaje antes
ol.before('before');
//Inserta el mensaje después
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
//Inserta el mensaje al principio
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
//Inserta el mensaje al final
ol.append(liLast);

//insertAdjacentHTML/Text/Element

/*
beforebegin -> Inserta HTML inmediatamente antes del elem.
afterbegin -> Inserta HTML en elem, AL PRINCIPIO..
beforeend -> Inserta HTML en elem, AL FINAL
afterend -> Inserta HTML INMEDIATAMENTE DESPUÉS del elem.
*/
div2.insertAdjacentHTML('beforebegin', '<p>Hola</p>');
div2.insertAdjacentHTML('afterend', '<p>Adiós</p>');

//Eliminación de nodos -> node.remove()

// console.log(setTimeout(() => div2.remove(), 2000));

/*
CLONANDO NODOS: cloneNode()

Crea una clonación 'profunda' del elemento, con todos los atributos y subelementos. Si se llama elem.cloneNode(false), la clonación se hace sin sus elementos hijos.
*/

let div3 = document.cloneNode(true);
div3.querySelector('strong').innerHTML = '¡Adiós!';

/*
Una palabra acerca de 'document.write'

Escribe texto en la página web.
*/

setTimeout(() => {
  document.write(
    '<b>¡HOLA!, Saludos desde document.write en JavaScript 👋</b>'
  );
}, 1000);
