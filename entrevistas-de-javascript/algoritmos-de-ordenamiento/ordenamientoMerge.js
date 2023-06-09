/*
  Ejercicio:
  1. Implemente un algoritmo capaz de combinar dos arrays ordenados, obteniendo un array ordenado.
  2. Analice el orden de su algoritmo.
  3. Implemente un algoritmo el cual dado un array cualquiera, lo ordene
  4. Analice el orden de su algoritmo.
*/

//variables
const arr = [3, 1, 4, 5, 8, 7, 5, 1];

//funciones
const merge = (mergeLeft, mergeRight) => {
  //validaciones
  if (!(mergeLeft instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of mergeLeft) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }
  if (!(mergeRight instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of mergeRight) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let combinedArray = [];
  let firstElement;

  //algoritmo
  while (mergeLeft.length && mergeRight.length) {
    if (mergeLeft[0] < mergeRight[0]) {
      firstElement = mergeLeft.shift();
    } else {
      firstElement = mergeRight.shift();
    }
    combinedArray.push(firstElement);
  }
  combinedArray = combinedArray.concat(mergeLeft).concat(mergeRight);

  return combinedArray;
};
//orden del algoritmo: o(n + m)

const mergeSort = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }
  if (arr.length === 1) return arr;

  //variables
  let mediumArray = Math.trunc(arr.length / 2);
  let leftArray = arr.splice(0, mediumArray);
  let rightArray = arr;
  let mergeLeft = mergeSort(leftArray);
  let mergeRight = mergeSort(rightArray);

  //algoritmo
  return merge(mergeLeft, mergeRight);
};
//orden del algoritmo: o(n log n)

//resultados
console.info(mergeSort(arr));
