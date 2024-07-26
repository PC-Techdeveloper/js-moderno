/*
Eventoso del mouse:

-- mousedown/mouseup -> Se oprime/suelta el botón del ratón sobre un elemento.
-- mouseover/mouseout -> El puntero del mouse se mueve sobre/sale de un elmento.
-- mousemove -> Cualquier movimiento del mouse sobre un elemento activa el evento.
-- click -> Se activa después de mousedown y un mouseup enseguida sobre el mismo elemento si se uso el botón.
-- dbclick -> Se activa después de dos clicks seguidos sobre el mismo elemento.
-- contextmenu -> Se activa al pulsar el botón derecho del ratón
*/

/*
El botón del mouse:

Los eventos relacionados con clics siempre tienen la propiedad 'button', los controladores mousedown y mouseup pueden necesitar 'event.button' ya que estos eventos se activan con cualquier botón y button permite distinguir entre mousedown derecho y mousedown izquierdo.

* LOS VALORES PARA EVENT.BUTTON SON:
- Botón izquierdo primero -> 0
- Botón central auxiliar -> 1
- Botón derecho secundario -> 2
- Botón x1 atrás -> 3
- Botón x2 delante -> 4.
*/

/*
Modificadores: SHIFT, ALT, CTRL Y META

Propiedades del evento:
shiftKey -> Indica si se presiono el shift
altKey -> Indica si se presiono el alt (Opt para Mac)
ctrlKey -> Indica si se presiono el ctrl
metaKey -> Indica si se presiono el meta

En Mac suele ser Cmd en lugar de Ctrl.
*/
const button = document.getElementById('button2');

button.onclick = function (event) {
  if (event.altKey && event.shiftKey) {
    alert('Haz echo click con estás dos teclas! 😎');
  }
};

/*
Coordenadas: clientX, clientY, offsetX, offsetY, pageX, pageY

Relativas a la ventana -> clientX, clientY
Relativas a la página -> pageX, pageY
*/

/*
Preveniendo la selección en mousedown:
-- El doble click del mouse tiene un efecto secundario que puede ser molesto en algunas interfaces:
Selecicona texto. Por ejmplo; Un doble click en el texto de abajo lo selecciona además de activar el controlador.
*/
