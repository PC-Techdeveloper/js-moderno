/** FECHA Y HORA:
 * Objeto incorporado de JS -> Date
 */

// Creamos un objeto fecha -> Fecha actual
//Formato: YYYY-MM-DD
let now = new Date()
console.log(now)

/**
 * ACCESO A LOS COMPONENTES DE LA FECHA
 * getFullYear() -> Devuelve el año (4 dígitos).
 * getMonth() -> Devuelve el mes (0 a 11).
 * getDate() -> Devuelve el día del mes (1 a 31).
 * getHours, getSeconds, getMinutes, getMilliseconds -> Devuelve el número de horas, segundos, minutos y milisegundos.
 * getTime() -> Devuelve el timestamp de la fecha.
 * getTimeZoneOffset() -> Devuelve el offset de la zona horaria.
 */

//Hora en la zona horaria
console.log(now.getHours())
console.log(now.getMinutes())

//Autocorreción -> Lo ajusta automáticamente
let newDate = new Date(2013, 0, 32)
console.log(newDate.getDay())

let start = Date.now()
