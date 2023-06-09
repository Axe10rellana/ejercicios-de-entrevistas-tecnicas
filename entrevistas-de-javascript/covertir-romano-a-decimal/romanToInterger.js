/*
  Enunciado Ejercicio 40:
  Crear una función que convierta un número romano a decímal.

  Ejemplos:
  romanoAEntero("XVIII") //18
  romanoAEntero("CXX") //120
*/

function romanoAEntero(romano) {
  //validaciones
  if (typeof romano !== "string")
    return console.error("El valor debe ser un string");

  if (romano === "") return console.error("El valor no debe estar vacio");

  //variables
  const tablaRomanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const length = romano.length;
  let resultado = 0;

  //algoritmo
  for (let i = 0; i < length; i++) {
    const actual = tablaRomanos[romano[i]];
    const siguiente = tablaRomanos[romano[i + 1]];

    if (i === length - 1 || siguiente <= actual) {
      resultado += actual;
    } else {
      resultado -= actual;
    }
  }

  return resultado;
}

//resultados
console.info(romanoAEntero("XVIII")); //18
console.info(romanoAEntero("CXX")); //120
