/*
SELECCIONAR ELEMENTOS DEL DOM
*/

//Seleccionar un elemento por su ID -> <div id="page"></div>
// const $page = document.getElementById('page')

//Seleccionar un elemento por su clase -> <div class="item"></div> -> 3 divs
// const $item = document.getElementsByClassName('item')

// Seleccionar un elemento por su atributo name o etiqueta
// const $nickNames = document.getElementsByName('nickName') // [input]
// const $divs = document.getElementsByTagName('div') // [div, div, div]

/*
MÉTODOS MODERNOS
*/
//Por selector de clase en CSS
// const $firstPage = document.querySelector('#page') // <div id="page"></div>
// const $info = document.querySelector('.main .info') // <div class="info"></div>

//Obtiene todos los elementos que coinciden con el selector
// const $infos = document.querySelectorAll('.info')
// const $nick_names = document.querySelectorAll('[name="nickName"]')
// const $alll_divs = document.querySelectorAll('div')

/*
BÚSQUEDAS ACORTADAS
*/
// const $links = document.querySelectorAll('#menu a')

/*
NodeList o HTMLCollection
*/
// const $elements = document.querySelectorAll('div')
// $elements.map // undefined

// const $myElement = [...document.querySelectorAll('div')]
// $myElement.map // ƒ map() { [native code] }

/*
CREAR ELEMENTOS EN EL DOM
*/

//Crear un elemento -> Aún no se agrega al HTML
// const $span = document.createElement('span')
// console.log($span)

//Fragmentos de texto sin etiquetas HTML
// const $text = document.createTextNode('Hola Mundo')
// console.log($text)
//Comentarios
// const $comment = document.createComment('Este es un comentario')
// console.log($comment)

/*
GESTIONAR ATRIBUTOS DEL DOM: Un atributo puede tener un valor o ser un atributo boolean, es decir, simplemente estar presente y no tener ningún valor indicado.
*/

//Acceder a atributos HTML
// const $MY_ELEMENT = document.querySelector('div') // <div class='container'></div>

//<div id="page" class="container"></div>
// $MY_ELEMENT.id = 'page'

// <div id="page" class="container" style="color: red"></div>
// $MY_ELEMENT.style = 'color: red'

//<div id="page" class="data" style="color: red"></div>
// $MY_ELEMENT.className = 'data'

/*
OBTENER ATRIBUTOS HTML:

- hasAttributes() o hasAttribute() -> Para saber que atributo tienen definidos una etiqueta HTML.

- getAttributeNames() -> Devuelve la lista de atributos de una etiqueta HTML.

- getAttribute() -> Devuelve el valor de un atributo de una etiqueta HTML.
*/

// const $attributes = document.querySelector('#page')

// $attributes.hasAttributes()
// $attributes.hasAttribute('data-number')
// $attributes.hasAttribute('disabled')

// $attributes.getAttributeNames()
// $attributes.getAttribute('id')

//MODIFICAR O ELIMINAR ATRIBUTOS HTML

// const $modifiedAttributes = document.querySelector('#page')

//change data-number to 10
// $modifiedAttributes.setAttribute('data-number', '10')
//Remove attribute id
// $modifiedAttributes.removeAttribute('id')
//Again add id
// $modifiedAttributes.setAttribute('id', 'page')
//Como ya existe `disabled` eliminar el atributo
// $modifiedAttributes.toggleAttribute('disabled')
//Como no existe `hidden` lo añade
// $modifiedAttributes.toggleAttribute('hidden')

/*
LA API DE JAVASCRIPT
*/

//ClassList

//Acceder a clases CSS 🔓
//¿Qué clases tienen? -> length o value
// console.log($page.classList.value)

//Convert to array
// console.log(Array.from($attributes.classList))
// console.log([...$attributes.classList])

//Consult
// console.log($attributes.classList.item(0))

/*
AÑADIR Y ELIMINAR CLASES CSS -> Los métodos .classList.add() y .classList.remove() permiten indicar una o múltiples clases CSS a añadir o eliminar.
*/

// $attributes.classList.add('uno', 'dos')
// console.log($attributes.classList)

// $attributes.classList.remove('dark')
// console.log($attributes.classList)

//COMPROBAR SI EXISTEN CLASES -> .classList.contains()
// console.log($attributes.classList.contains('info'))

//CONMUTAR O ALTERAR  CLASES CSS -> .classList.toggle()
// console.log($attributes.classList.toggle('info'))

//REEMPLAZAR UNA CLASE -> .classList.replace(), SI NO existe devuelve false ⚠
// console.log($attributes.classList.replace('dark', 'light'))

//CONTENIDO EN EL DOM -> Insertar contenido en el DOM 🟨

//textContent -> Devuelve el contenido del texto (obtener o modificar SÓLO el texto)
// const $element = document.querySelector('.parent')
//Reemplazar el contenido
// $element.textContent = 'Hola a todos 👋'

//innerText y outerText -> Accede al texto renderizado visualmente por el navegador
// $element.innerText

//innerHTML -> Devuelve el HTML del elemento, y permite añadir contenido HTML
// $element.innerHTML = '<strong>Esto es importante 💌</strong>'

//PARSEO DE MARCADO EN EL HTML
// const $DIV = document.createElement('div')
// $divs.innerHTML = '<strong>Manz'
// console.log($DIV)

//outerHTML -> Devuelve el código desde el exterior, incluyendo el elemento implicado.

//<div class="data"><h1>Tema 1</h1></div>
// const $data = document.querySelector('.data')
// $data.innerHTML = '<h1>Tema 1</h1>'
// console.log($data.textContent)

/*
INSERTAR ELEMENTOS EN EL DOM

- API DE NODOS DE JAVASCRIPT

- appendChild()
- removeChild()
- replaceChild()
- insertBefore() -> Menos utilziada ⚠

*/

//appendChild -> añade o inserta un nuevo elemento
// const $container = document.querySelector('.container')

// const $img = document.createElement('img')
// $img.src = 'https://lenguajejs.com/assets/logo.svg'
// $img.alt = 'Logo de JavaScript'

// $container.appendChild($img)

//removeChild -> Elimina un elemento del DOM
// const $secondItem = container.querySelector('.item:nth-child(2)')
// $container.removeChild($secondItem)

//replaceChild -> Reemplaza un elemento por otro
// const newNode = document.createElement('div')
// newNode.textContent = 'DOS'

// $container.replaceChild(newNode, $secondItem)

/*
API DE ELEMENTOS (INSERTAR ELEMENTOS EN EL DOM)

- append()
- prepend()
- before()
- after()
- replaceWith()
- replaceChildren()
- remove()
*/

//prepend() y append() -> Añade un elemento al final de un nodo
// const $element = document.createElement('.container')
// $element.textContent = 'Item insertado'

// //Antes
// console.log($element.prepend($element))
// //Después
// console.log($element.append($element))

//replaceChildren() y replaceWith() -> Elimina los elementos y reemplazar los elementos
// const element = document.createElement('div')
// element.textContent = 'Nuevo Item hijo'
//Reemplaza por todos sus hijos
// console.log($element.replaceChildren($element))
//Reemplazado por el nuevo item hijo
// console.log($element.replaceWith($element))

