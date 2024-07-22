//getElementById -> busca un elemento por su id
const elem = document.getElementById('elem')
//fondo rojo
elem.style.backgroundColor = 'red'
elem.style.padding = '10px'
elem.style.fontSize = '20px'

//querySelectorAll -> busca varios elementos por su selector CSS
const elements = document.querySelectorAll('ul > li:last-child')
elements.forEach((element) => {
  console.log(element.innerHTML)
})

//querySelector -> busca el primer elemento por su selector CSS
const element = document.querySelector('ul > li:first-child')
console.log(element.innerHTML)

//closest -> busca el elemento padre
let chapter = document.querySelector('.chapter')
console.log(chapter.closest('.book'))

/*
ANTIGUOS:
getElementById -> busca un elemento por su id
getElementsByTagName -> busca varios elementos por su tag
getElementsByClassName -> busca varios elementos por su clase

MODERNOS:
querySelector -> busca el primer elemento por su selector CSS
querySelectorAll -> busca varios elementos por su selector CSS
closest -> busca el elemento padre

*/

const divs = document.getElementsByTagName('div')
console.log(divs)
