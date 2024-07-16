/*
El encadenamiento opcional es una forma a prueba de errores para acceder a las propiedades anidadas de los objetos, incluso si no existe una propiedad intermedia.

El encadenamiento opcional detiene la evaluación y devuelve 'undefined' si el valor antes del ?. es undefined o null
*/

let user = {}
//No hay error, solo muestra undefined
console.log(user?.address?.street)
