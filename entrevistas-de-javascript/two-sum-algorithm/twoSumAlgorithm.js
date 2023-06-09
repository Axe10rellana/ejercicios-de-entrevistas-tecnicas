/*
  Ejercicio:
  Implemente una funcion twoSum, tal que dado un array de enteros y un numero k, devuelva los pares de numeros que suman k
  Ejemplo:
  Dado el array: [0,9,7,12,5,8,3]
  Los pares que suman 12 son: 
  [0, 12]
  [3, 9]
  [5, 7]
*/

//variables
let arr = [0, 9, 7, 12, 5, 8, 3];
let k = 12;

//funcion twoSum en orden o(n^2)
const twoSumClasico = (arr, k) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (number === undefined)
      return "Error: Uno o mas elementos del arreglo de numeros no esta definido";
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas elementos del arreglo de numeros es un numero negativo";
    if (!Number.isInteger(number))
      return "Error: uno o mas elementos del arreglo de numeros no es un numero entero";
  }
  if (k === undefined) return "Error: Se esperaba un numero a buscar";
  if (typeof k !== "number")
    return "Error: Se esperaba que el numero sea un numero de tipo numero y entero";
  if (Math.sign(k) === -1)
    return "Error: El numero a buscar no puede ser negativo";
  if (k === 0) return "Error: El numero a buscar no puede ser 0";
  if (!Number.isInteger(k))
    return "Error: El numero a buscar debe ser un numero entero";

  //variables
  let pairSum = [];

  //algoritmo
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        pairSum.push([arr[i], arr[j]]);
      }
    }
  }

  return pairSum;
};

//funcion twoSum usando un diccionario en orden o(n)
const twoSum = (arr, k) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (number === undefined)
      return "Error: Uno o mas elementos del arreglo de numeros no esta definido";
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas elementos del arreglo de numeros es un numero negativo";
    if (!Number.isInteger(number))
      return "Error: uno o mas elementos del arreglo de numeros no es un numero entero";
  }
  if (k === undefined) return "Error: Se esperaba un numero a buscar";
  if (typeof k !== "number")
    return "Error: Se esperaba que el numero sea un numero de tipo numero y entero";
  if (Math.sign(k) === -1)
    return "Error: El numero a buscar no puede ser negativo";
  if (k === 0) return "Error: El numero a buscar no puede ser 0";
  if (!Number.isInteger(k))
    return "Error: El numero a buscar debe ser un numero entero";

  //variables
  let pairSum = [];
  let numberSave = {};

  //algoritmo
  for (let i = 0; i < arr.length; i++) {
    if (numberSave[arr[i]] !== undefined) {
      pairSum.push([arr[i], numberSave[arr[i]]]);
    } else {
      auxNumber = 12 - arr[i];
      numberSave[auxNumber] = arr[i];
    }
  }

  return pairSum;
};

//el orden del algoritmo de ordenamiento de la funcion merge es o(n + m)
const merge = (mergeLeft, mergeRight) => {
  //variables
  let combinedArray = [];

  //algoritmo
  while (mergeLeft.length && mergeRight.length) {
    let firstElement;
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

//el orden del algoritmo de ordenamiento de la funcion mergesort es o(n log(n))
const mergeSort = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (number === undefined)
      return "Error: Uno o mas elementos del arreglo de numeros no esta definido";
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas elementos del arreglo de numeros es un numero negativo";
    if (!Number.isInteger(number))
      return "Error: uno o mas elementos del arreglo de numeros no es un numero entero";
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

//funcion twoSum usando mergeSort
const twoSumWithMergeSort = (arr, k) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (number === undefined)
      return "Error: Uno o mas elementos del arreglo de numeros no esta definido";
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas elementos del arreglo de numeros es un numero negativo";
    if (!Number.isInteger(number))
      return "Error: uno o mas elementos del arreglo de numeros no es un numero entero";
  }
  if (k === undefined) return "Error: Se esperaba un numero a buscar";
  if (typeof k !== "number")
    return "Error: Se esperaba que el numero sea un numero de tipo numero y entero";
  if (Math.sign(k) === -1)
    return "Error: El numero a buscar no puede ser negativo";
  if (k === 0) return "Error: El numero a buscar no puede ser 0";
  if (!Number.isInteger(k))
    return "Error: El numero a buscar debe ser un numero entero";

  //variables
  let arrSorted = mergeSort(arr);
  let pairSum = [];
  let start = 0;
  let end = arrSorted.length - 1;

  //algoritmo
  while (start < end) {
    let sumResult = arrSorted[start] + arrSorted[end];
    if (sumResult === k) {
      pairSum.push([arrSorted[start], arrSorted[end]]);
      start++;
      end--;
    } else if (sumResult > k) {
      end--;
    } else if (sumResult < k) {
      start++;
    } else {
      return "Ningun numero es igual al numero";
    }
  }

  return pairSum;
};
//resultado
console.info(twoSumWithMergeSort(arr, k));
