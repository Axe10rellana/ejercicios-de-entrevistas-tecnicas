//variables
let numeros = [1, 2, 3, 4, 5, 6];

//funcion
const multiplicarPorDos = (numero) => console.info(numero * 2);

//por referencia
numeros.map(multiplicarPorDos);

//por invocacion
numeros.map((numero) => multiplicarPorDos(numero));
