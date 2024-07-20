/*
PROMESAS API:
🟨
*/

//promise.all -> Toma un iterable y devuelve una nueva promesa.
Promise.all([new Promise((resolve) => setTimeout(() => resolve(1), 3000)), new Promise((resolve) => setTimeout(() => resolve(2), 2000)), new Promise((resolve) => setTimeout(() => resolve(3), 1000))])
