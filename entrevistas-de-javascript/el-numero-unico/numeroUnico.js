/*
  Ejercicio:
  Dado un array no vacio, donde cada entero aparece dos veces a excepción de uno
  Crear una función singleNumber la cual recibe como parametro ese array y retorna
  el entero que aparece una sola vez.
*/

//variables
let arr = [1, 3, 5, 3, 1]; //5
let arr1 = [7, 4, 3, 88, 4, 88, 3]; //7
let arr2 = [3, 3, 23, 65, 23, 4, 65]; //4

//funcion singleNumber usando diccionario. orden o(n) + o(n/2)
const singleNumber = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let countNumber = {};

  //algoritmo
  for (let number of arr) {
    countNumber[number] = countNumber[number] + 1 || 1;
  }

  for (let numberKey in countNumber) {
    if (countNumber[numberKey] === 1) return numberKey;
  }
};

//funcion singleNumber usando conjuntos set(). orden o(n)
const singleNumberWithSet = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }
  //variables
  let countSet = new Set();

  //algoritmo
  for (let number of arr) {
    if (countSet.has(number)) {
      countSet.delete(number);
    } else {
      countSet.add(number);
    }
  }
  return Array.from(countSet)[0];
};

//funcion singleNumber usando el operador xor ^. orden o(n)
const singleNumberWithXor = (arr) => {
  //validaciones
  if (!(arr instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arr) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //variables
  let result = 0;

  //algoritmo
  for (let number of arr) {
    result = result ^ number;
  }

  return result;
};
//resultado
console.info(singleNumberWithXor(arr1));
