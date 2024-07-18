//Pensamiento recursivo: Se llama a sí mismo

function pow(x, n) {
  if (n === 1) {
    return x
  } else {
    //Recursividad
    return x * pow(x, n - 1)
  }
}

const result = pow(4, 3)
console.log(result)

//Con operador ternario -> Más corta
function secondPow(x, n) {
  return n === 1 ? x : x * secondPow(x, n - 1)
}

const result2 = secondPow(5, 3)
console.log(result2)

//Recorridos recursivos
let company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
}

console.log(company.development.sites[0].name)
