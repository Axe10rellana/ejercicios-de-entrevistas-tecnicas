/*
  Ejercicio n4: Dada una palabra, buscarla en una frase y devolver cuantas veces
  aparece en ella.
  La frase y la palabra deben ser parametros de una funcion

  Ejemplo:
  coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra"); devuelve 2
  coincidencias("soy la frase", "victor"); devuelve 0

  Como hacerlo:
  - Funcion con parametro dos parametros "frase" y "busqueda"
  - Poner string en minusculas y limpiarlo
  - Comprobar si la busqueda esta incluida en la frase
  - Crear un array de palabras de la frase
  - Mapear esas palabras y hacer un contador de cada una
  - Devolver el contador de la busqueda 
*/

//funcion
function coincidences(phrase, search) {
  //validaciones
  if (typeof phrase !== "string")
    return console.error("La frase no es una cadena de texto");
  if (typeof search !== "string")
    return console.error("La palabra a buscar debe ser una cadena de texto");
  if (phrase === "") return console.error("Se esperaba una frase");
  if (search === "") return console.error("Se esperaba una palabra a buscar");

  //variables
  search = search
    .toLowerCase()
    .trim()
    .replace(/[!¡.,-]/gi, "");
  let clearText = phrase.toLowerCase().replace(/[!¡.,-]/gi, "");
  let result = 0;

  //algoritmo
  if (clearText.includes(search)) {
    let words = clearText.split(" ");
    let map = {};

    for (let word of words) map[word] = (map[word] || 0) + 1;
    return (result = map[search]);
  }

  return 0;
}

//resultados
console.info(
  "Numero de coincidencias: ",
  coincidences("hola soy una palabra en una frase, PALABRA.", "palabra")
);
console.info(
  "Numero de coincidencias: ",
  coincidences("soy la frase", "victor")
);
