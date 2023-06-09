//variables
let arr = [10, 8, 4, 7, 5, 9, 13, 12];

const bubleSort = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let aux;

  //algoritmo
  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] < arr[a]) {
        aux = arr[a];
        arr[a] = arr[b];
        arr[b] = aux;
      }
    }
  }

  return arr;
};

//resultado
console.info(bubleSort(arr));

//order del algoritmo: o(n2)