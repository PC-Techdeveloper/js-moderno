/*
Introducción a los eventos:

Eventos más utilizados:

MOUSE:
-- click -> Cuando el mouse hace click sobre un elemento.
-- contextmenu -> Cuando el mouse hace click derecho sobre un elemento.
-- mouseover/mouseout -> Cuando el cursor del mouse ingresa/abandona un elemento.
-- mousedown/mouseup -> Cuando el botón del mouse es presionado/soltado sobre un elemento.
-- mousemove -> Cuando el mouse se mueve.

TECLADO:
keydown/keyup -> Cuando se presiona/suelta una tecla.

ELEMENTO FORM:
-- submit -> Cuando el visitante envía un <form></form>
-- focus -> Cuando el visitante hace foco en un elemento, <button>

DOCUMENTO:
DOMcontentLoaded -> Cuando el HTML es cargado y procesado, el DOM está completamente construido.

CSS:
transitionend -> Cuando una animación CSS concluye.

CONTROLADORES DE EVENTOS:
-- Asignar un handler (controlador) el cual es una función que se ejecuta en caso de un evento (EN CASO DE ACCIONES POR PARTE DEL USUARIO).
*/

//Handler
function countRabbits() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Conejo número: ${i}`);
  }
}

//PROPIEDAD DEL DOM -> Utilizar un handler on<event>
elem.onclick = function () {
  alert('¡Después 👋🎉!');
};

//Para eliminar un handler
// elem.onclick = null;

/*
ACCEDIENDO AL ELEMENTO THIS
-- El valor de this dentro de un handler es el elemento, el cual tiene el handler dentro.
*/

function sayThanks() {
  document.write('GRACIAS 🤪');
}

// const button = document.getElementById('button');

// button.onclick = sayThanks;

/*
AddEventListener:

sintaxis:
element.addEventListener(event, handler, [options]);

- event -> Nombre del evento (click).
- handler -> La función handler.
- options -> Un objeto adicional, opcional, con las propiedades.

Para remover el handler
- removeEventListener.
*/

const button = document.getElementById('button');

//Multiples hadler
function handler() {
  alert('Gracias!');
}

function handler2() {
  alert('¡Gracias de nuevo! 👍'.toUpperCase());
}

// button.onclick = () => alert('HOLA DE NUEVO!!!');
// button.addEventListener('click', handler);
// button.addEventListener('click', handler2);
// button.removeEventListener('click', handler);

//Obtener las coordenadas del cursor a partir del objeto del evento.
//event.currentTarget -> Identifica el objetivo actual del evento.

/*
PROPIEDADES DEL EVENTO:
- event.type -> Tipo del evento.
- event.currentTarget -> Elemento que maneja el evento.
- event.clientX/clientY -> Coordenadas del cursor relativas a la ventana. Para eventos del cursor
*/

button.onclick = function (event) {
  alert(`${event.type} en el ${event.currentTarget}`);
  alert(`Coordenadas: ${event.clientX}: ${event.clientY}`);
};

/*
OBJETO HANDLERS: HandleEvent
- Podemos asignar un objeto como handler del evento usando 'addEventListener', cuando el evento ocurre el evento handleEvent es llamado.
*/
const btn2 = document.getElementById('btn2');

let obj = {
  handleEvent(event) {
    alert(`${event.type} en ${event.currentTarget}`);
  },
};
btn2.addEventListener('click', obj);
