//Clases en ficheros externos
//Export default -> Al importar sin usar las llaves -> {}
//Export named -> usar las llaves -> {}

export class Animal {
  constructor(name) {
    this.name = name
  }

  hablar() {
    return `Odio los lunes 😡`
  }
}
