/*
  1. Implemente un algoritmo capaz de combinar dos arrays ordenados, obteniendo un array ordenado.
  2. Analice el orden de su algoritmo.
  3. Implemente un algoritmo el cual dado un array cualquiera, lo ordene.
  4. Analice el orden de su algoritmo.
*/

//variables
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

//funcion
const merge = (arr1, arr2) => {
  //validaciones
  if (!(arr1 instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr1) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }
  if (!(arr2 instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr2) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let combinedArray = [];
  let firstElement;

  //algoritmo
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      firstElement = arr1.shift();
    } else {
      firstElement = arr2.shift();
    }
    combinedArray.push(firstElement);
  }

  combinedArray = combinedArray.concat(arr1).concat(arr2);
  return combinedArray;
};
//orden del algoritmo: o(n + m)

//resultados
console.info(merge(arr1, arr2));
