/* 
  Ejericicios
  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//ejecucion del codigo
console.clear();

//ejercicio 1
/* const contarCaracteres = (cadena = "") => {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}; */
const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
contarCaracteres("hola mundo");

//ejercicio 2
const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(`${cadena.slice(0, longitud)}`);
recortarTexto("hola mundo", 4);

//ejercicio 3
const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : separador === undefined
    ? console.warn("No ingresaste el separador para separar la cadena")
    : console.info(cadena.split(separador));
cadenaAArreglo("hola que tal", " ");

//ejercicio 4
const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste ningun texto");
  if (veces === undefined)
    return console.warn(
      "No ingresaste el numero de veces que deseas repetir el texto"
    );
  if (veces === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) {
    console.log(`${texto}, ${i}`);
  }
};
repetirTexto("hola mundo", 3);
