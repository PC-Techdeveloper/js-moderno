//window -> objeto global que contiene todas las funciones del navegador
console.log(window)
console.log(window.document)
//Ver la altura y anchura del navegador
console.log(window.innerHeight)
console.log(window.innerWidth)
//Ver la altura y anchura del navegador incluyendo el margen
console.log(window.outerHeight)
console.log(window.outerWidth)

//document -> Punto de entrada a la página, con el podemos modificar toda la página.

//Cambiar el color de fondo
document.body.style.backgroundColor = '#09f'

//Deshacer el cambio después de 3 segundo.
setTimeout(() => {
  document.body.style.backgroundColor = '#fff'
}, 3000)
