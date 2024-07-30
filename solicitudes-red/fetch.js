/*JavaScript puede enviar peticiones de red y cargar nueva información siempre que se necesite.

response.text() – lee y devuelve la respuesta en formato texto,
response.json() – convierte la respuesta como un JSON,
response.formData() – devuelve la respuesta como un objeto FormData (explicado en el siguiente capítulo),
response.blob() – devuelve la respuesta como Blob (datos binarios tipados),
response.arrayBuffer() – devuelve la respuesta como un objeto ArrayBuffer (representación binaria de datos de bajo nivel),
*/

let response = await fetch('../solicitudes-red/logo-fetch.png')

let blob = await response.blob() // download as Blob object

// crear tag <img> para imagen
let img = document.createElement('img')
img.style = 'position:fixed;top:10px;left:10px;width:100px'
document.body.append(img)

// mostrar
img.src = URL.createObjectURL(blob)

setTimeout(() => {
  // ocultar luego de tres segundos
  img.remove()
  URL.revokeObjectURL(img.src)
}, 3000)
