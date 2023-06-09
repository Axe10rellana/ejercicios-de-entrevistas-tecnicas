/* 
  Ejericicios
  5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//ejecucion del codigo
console.clear();

//ejercicio 5
const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(cadena.split("").reverse().join(""));
invertirCadena("hola mundo");

//ejercicio 6
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No se ingreso ninguna cadena");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0;
  let contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};
textoEnCadena("hola mundo adios mundo", "mundo");

//ejercicio 7
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No se ingreso ninguna palabra");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      )
    : console.info(`La palabra ${palabra} No es un palindromo`);
};
palindromo("salas");

//ejercicio 8
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste ningun texto")
    : !patron
    ? console.warn("No ingresaste ningun patron")
    : console.info(`${texto.replace(new RegExp(patron, "ig"), "")}`);
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres(
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, possimus eos? Minus nobis quae, quis ipsam repellat consequatur iusto cupiditate quidem illo voluptates tempore quos veritatis laborum, provident ipsa dolor?",
  "[a-z]"
);
