//variables
let arr = [1, 2, 3, 4, 56, 7, 8, 10];
let arr2 = [1, 1, 1, 2, 10];

//funcion
const maxMin = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  if (Object.keys(arr).length === 0)
    return "Error: El arreglo de numeros esta vacio";
  for (let number of arr) {
    if (number === undefined)
      return "Error: Uno o mas numeros estan indefinidos";
    if (typeof number !== "number")
      return "Error: Uno o mas numeros del arreglo de numeros no es de tipo numero";
    if (!Number.isInteger(number))
      return "Error: Uno o mas numeros del arreglo de numeros no es un numero entero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas numeros del arreglo de numeros es negativo";
  }

  //variables
  let sum = 0;
  let arrSorted = arr.sort((a, b) => a - b);
  let MaxNumber = arrSorted[arrSorted.length - 1];
  let MinNumber = arrSorted[0];
  sum = MaxNumber + MinNumber;

  return sum;
};

//resultado
console.info(maxMin(arr));
