//Encontrar el numero que falta en un array ordenado que comienza en 0
//variable
let arr = [0, 1, 2, 3, 4, 5, 6, 8, 9];

const findMissing = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let i = 0;

  //algoritmo
  while (i < arr.length) {
    if (arr[i] + 1 === arr[i + 1]) {
      i++;
    } else {
      return arr[i] + 1;
    }
  }
};

//Encontrar todos los numeros que faltan en un array ordenado que comienza en 0
//variables
let arr2 = [0, 1, 2, 4, 5, 8, 10];

const findAllMissings = (arr2) => {
  //validaciones
  if (!(arr2 instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr2) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let i = 0;
  let missingNumbers = [];
  let lastNumberChecked = arr2[0];

  //algoritmo
  while (i < arr2.length - 1) {
    if (lastNumberChecked + 1 === arr2[i + 1]) {
      i++;
    } else {
      missingNumbers.push(lastNumberChecked + 1);
    }
    lastNumberChecked++;
  }
  return missingNumbers;
};

//Encontrar todos los numeros que faltan en un array que no esta ordenado que el numero minimo sea 0
let arr3 = [8, 10, 2, 4, 0, 1, 5];

const bubleSort = (arr3) => {
  //validaciones
  if (!(arr3 instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr3) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let aux;

  //algoritmo
  for (let a = 0; a < arr3.length; a++) {
    for (let b = a + 1; b < arr3.length; b++) {
      if (arr3[b] < arr3[a]) {
        aux = arr3[a];
        arr3[a] = arr3[b];
        arr3[b] = aux;
      }
    }
  }
  return arr3;
};

const findAllMissingsUnsorted = (arr3) => {
  //validaciones
  if (!(arr3 instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr3) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  //let arrSorted = bubleSort(arr3);
  let arrSorted = arr3.sort((a, b) => a - b );
  let i = 0;
  let missingNumbers = [];
  let lastNumberChecked = arrSorted[0];

  //algoritmo
  while (i < arrSorted.length - 1) {
    if (lastNumberChecked + 1 === arrSorted[i + 1]) {
      i++;
    } else {
      missingNumbers.push(lastNumberChecked + 1);
    }
    lastNumberChecked++;
  }
  return missingNumbers;
};

//resultado
console.info(findMissing(arr));
console.info(findAllMissings(arr2));
console.info(findAllMissingsUnsorted(arr3));
