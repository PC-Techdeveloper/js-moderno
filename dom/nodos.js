//Nombres de la clase del nodo DOM
console.log(document.body.constructor.name)
console.log(document.body)

// console.dir(elem)

//tag: nodeName -> nombre del nodo
//tag: tagName -> nombre del nodo

console.log(document.body.nodeName)
console.log(document.body.tagName)

//La propiedad nodeType -> tiene un valor númerico
/*
elem.nodeType === 1 -> Para nodo de elementos.
elem.nodeType === 3 -> Para nodo de texto.
elem.nodeType === 9 -> Para nodo de documento.
*/
let elem = document.body
console.log(elem.nodeType)
console.log(elem.firstChild.nodeType)
console.log(document.nodeType)

/*
tag: nodeName y tagName.
Podemos leer su nombre de etiqueta en las propiedades nodeName y tagName.

-- Si solo se trata con documentos -> TagName o nodeName
*/
console.log(document.body.nodeName)
console.log(document.body.tagName)
console.log(document.body.firstChild.nodeName)
console.log(document.nodeName)

/*
innerHTML -> La propiedad innerHTML permite obtener el HTML dentro del elemento como un string. También podemos modificarlo.
*/
// document.body.innerHTML = '<h1>El nuevo Body!</h1>'

//innerHTML+= hace una sobreescritura completa ⚠.
//Agregar un elemento html a un elemento existente
// elem.innerHTML += '<div>Hola"</div>'
// elem.innerHTML = '¿Cómo vas? 👋'

//outerHTML -> Contiene el HTML completo del elemento y lo reemplaza.
const secondElement = document.getElementById('element2')
console.log(secondElement.outerHTML)

// secondElement.outerHTML = '<p>Un nuevo elemento p</p>'

//nodeValue/data -> Contenido del nodo de texto.

let $text = document.body.firstChild
console.log($text.data)

let $comment = $text.nextSibling
console.log($comment.data)

/*
textContent -> Texto puro.

El textContent proporciona acceso al texto dentro del elemento solo texto, menos todas las <tags>.
*/
const news = document.getElementById('news')
console.log(news.textContent)

// let name = prompt('¿Cuál es tu nombre?', '<b>¡Winnie-Pooh 😀!</b>')
elem1.innerHTML = name
elem2.textContent = name

/*
La propiedad HIDDEN -> Especifícan si el elemento es visible o no.
*/

const elem3 = document.getElementById('elem3')

setInterval(() => {
  elem3.hidden = !elem3.hidden
}, 1000)

/*
Otras propiedades:
-- value -> Valor del elemento.
-- href -> Enlace del elemento.
-- id -> Identificador del elemento.
-- classList -> Lista de clases del elemento.
*/
const $otroElement = document.getElementById('elemento')
console.log($otroElement.type)
console.log($otroElement.id)
console.log($otroElement.value)
