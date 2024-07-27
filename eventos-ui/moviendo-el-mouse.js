//Moviendo el mouse: mouseover/out, mouseenter/leave

/*
Para mouseover:
- event.target -> Es el elemento al que se acerca el mouse.
- event.relatedTarget -> Es el elemento de donde proviene el mouse.

Para mouseout:
- event.target -> Es el elemento que el mouse dejó.
- event.relatedTarget -> Es el nuevo elemento bajo el cursor por el cual el cursor dejó al anterior.
*/

container.onmouseover = container.onmouseout = handler;

function handler(event) {
  function str(el) {
    if (!el) return 'null';
    return el.className || el.tagName;
  }

  log.value +=
    event.type +
    ':  ' +
    'target=' +
    str(event.target) +
    ',  relatedTarget=' +
    str(event.relatedTarget) +
    '\n';
  log.scrollTop = log.scrollHeight;

  if (event.type == 'mouseover') {
    event.target.style.background = 'pink';
  }
  if (event.type == 'mouseout') {
    event.target.style.background = '';
  }
}
