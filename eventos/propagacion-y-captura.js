/*
PROPAGACIÓN: Los eventos se propagan, desde el elemento más interiror. A través de los padres.
-- Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre. Y así, hacia sus otros ancestros.
*/

/*
event.target:
-- event.target – es el elemento “objetivo” que inició el evento, no cambia a través de todo el proceso de propagación.
-- this – es el elemento “actual”, el que tiene un manejador ejecutándose en el momento.

detener la propagación -> event.stopPropagation()
*/

//Captura

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', e => alert(`Captura: ${elem.tagName}`), true);
  elem.addEventListener('click', e => alert(`Propagación: ${elem.tagName}`));
}

//event.defaultPrevented -> Para evitar que se ejecute el manejador de un elemento
