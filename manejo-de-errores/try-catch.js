/*
Try...catch Permite atrapar errores para que el script pueda en luegar de morir, pueda hacer algo más razonable.
*/
try {
  console.error('Inicio de intentos de ejecución');
  console.error('Fin de la ejecución de try');
  werwerwrew;
} catch (err) {
  console.error('¡Un error ha ocurrido! ❌');
}

let json = '{json malo}';

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (err) {
  console.error(
    'Nuestras disculpas, los datos tienen errores, intentaremos solicitarlos una vez más ❌'
  );
  console.log(err.name); //Error name
  console.log(err.message); //Error message
}

//EL OPERADOR THROW -> Genera un error

/*
Constructores integrados para manejar errores:

Error, SyntaxError, ReferenceError, TypeError, RangeError, URIError, EvalError, InternalError.

PROPIEDADES DE ERRORES:
- name -> Nombre del error
- message -> Argumento del mensaje
*/

let error1 = new Error('Estas cosas pasan... o_0');
console.log(error1.name);
console.log(error1.message);

try {
  JSON.parse('{json malo o_0}');
} catch (err) {
  console.error(err.name);
  console.error(err.message);
}

let secondJson = '{"age": 30}';

try {
  let user = JSON.parse(secondJson);
  if (!user.name) {
    throw new SyntaxError('Dato incompleto: Sin nombre!');
  }
  console.log(user.name);
} catch (err) {
  console.error(`Èrror en JSON: ${err.message}`);
}

//Try...catch...finally
//try -> intenta ejecutar el código
//catch -> ejecuta el código si ocurre un error
//finally -> ejecuta el código si todo va bien

try {
  console.log('intenta (try)');
  if (confirm('¿Cometer un error?')) BAD_CODE();
} catch (err) {
  console.log('atrapa (catch)');
} finally {
  console.log('finalmente (finally)');
}
