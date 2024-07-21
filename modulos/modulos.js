/*
Un módulo es un archivo script donde pueden cargarse entre sí y usar directivas especiales para importar y exportar.

-- La palabra clave 'export' etiqueta las variables y funciones que necesitan ser accesibles desde otros archivos fuera del módulo actual.

-- La palabra clave 'import' permite importar funcionalidades desde otros módulos.
*/

import { sayHi } from './sayHi.js'

console.log(sayHi('Juan'))

//import.meta.url -> Contiene la información sobre el módulo actual.
console.log(import.meta.url)

//Importa todo el módulo
import * as say from './say.js'

say.sayHi('Peter')
say.sayBye('Peter')

//IMPORT as -> Importar bajo nombres diferentes.
import { sayHi as hi, sayBye as bye } from './say.js'

hi('John')
bye('John')

//Export ass -> Exportar bajo nombres diferentes.
export { sayHi as hi, sayBye as bye } from './say.js'

hi('Mary')
bye('Mary')

//Export default -> Importar sin llaves.

import greeting from './say.js'

new greeting('Jefferson')
