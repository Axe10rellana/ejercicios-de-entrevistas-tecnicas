/*
  Ejercicio n2: Dada una cadena de texto, darle la vuelta e invertir el orden de sus
  caracteres, sin usar metodos propios del lenguaje, solo estructuras de control.

  Ejemplos:
  invertir("hole") devuelve "aloh"
  invertir("victor") devuelve "rotciv"
  invertir("robles") devuelve "selbor"

  Como hacerlo:
  - Funcion con parametro "texto"
  - Crear una variable para guardar la cadena invertida
  - Bucle que recorra el string y guarde los caracteres en la variable
*/

//funcion sin metodos del lenguaje
const invert = (text) => {
  //validaciones
  if (typeof text !== "string")
    return console.info("El valor no es una cadena de texto");
  if (text === "" || text === undefined)
    return console.info("La cadena de texto esta vacia");

  //variables
  let inverted = "";

  //algoritmo
  for (let letter of text) {
    inverted = letter + inverted;
  }

  return inverted;
};

//funcion con metodo reverse
const invertWithReverse = (text) => {
  //validaciones
  if (typeof text !== "string")
    return console.info("El valor no es una cadena de texto");
  if (text === "" || text === undefined)
    return console.info("La cadena de texto esta vacia");

  //algoritmo
  return text.split("").reverse().join("");
};

//resultados
console.info("Texto invertido", invert("hola"));
console.info("Texto invertido", invert("victor"));
console.info("Texto invertido", invert("robles"));
console.info("Texto invertido", invertWithReverse("hola"));
console.info("Texto invertido", invertWithReverse("victor"));
console.info("Texto invertido", invertWithReverse("robles"));
