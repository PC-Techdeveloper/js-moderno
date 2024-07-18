function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = callback(script)
  document.body.appendChild(script)
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
  console.log(`Genial, el script ${script.src} ha sido cargado`)
})
