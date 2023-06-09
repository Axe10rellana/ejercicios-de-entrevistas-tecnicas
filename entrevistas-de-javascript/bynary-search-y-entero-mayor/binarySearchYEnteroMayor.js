/*
  +Buscar en un array ordenado
  +El primer elemento mayor a k
*/

//variables
let arr = [1, 3, 5, 7, 9, 10, 12];
let k = 3;
let bottomIndex = 0;

//funciones
const recursiveSearch = (arr, k, bottomIndex, topIndex) => {
  //validaciones
  if (k === undefined) return "Error: Se esperaba un valor a buscar";
  if (typeof k !== "number")
    return "Error: Se esperaba que el valor a buscar fuera un numero";
  if (Math.sign(k) === -1)
    return "Error: El valor a buscar no puede ser negativo";
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let midIndex = Math.trunc((bottomIndex + topIndex) / 2);

  //algoritmo
  if (bottomIndex > topIndex) return -1;
  if(arr[arr.length-1] === k) return -1;
  if (arr[midIndex] === k) return arr[midIndex + 1];
  if (arr[midIndex] < k) {
    bottomIndex = midIndex + 1;
  }
  if (arr[midIndex] > k) {
    topIndex = midIndex - 1;
  }

  return recursiveSearch(arr, k, bottomIndex, topIndex);
};

const binarySearch = (arr, k) => {
  return recursiveSearch(arr, k, bottomIndex, arr.length - 1);
};

//resultados
console.info(binarySearch(arr, k));

//orden del algoritmo: o(log n)