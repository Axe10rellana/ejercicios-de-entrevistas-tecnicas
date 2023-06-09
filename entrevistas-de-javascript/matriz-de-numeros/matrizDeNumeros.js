/*
  Ejercicio:
  Alice y Bob tiene barras de caramelos de diferentes tamaños:
  A[i] es el tamaño de la i-ésima barra de caramelo que tiene Alice
  B[j] es el tamaño de la j-ésima barra de caramelo que tiene Bob

  Como son amigos, les gustaría intercambiar una barra de chocolate cada uno
  para que después del intercambio, ambos tengan el mismo tamaño total de dulces.

  (La cantidad total de dulces que tiene una persona es la suma de los tamaños de
  las barras de dulce que tiene)

  Devuelveuna matriz de números enteros ans donde ans[0] es el tamaño de la barra de
  chocolate que Alice debe intercambiar y ans[1] es el tamaño de la barra de chocolate
  que Bob debe intercambiar.

  Si hay varias respuestas, puede devolver cualquiera de ellas.
  Está garantizado que existe una respuesta.

  Ejemplo:
  A = [7, 3, 2, 4]
  B = [6, 1, 5]
  [7, 5]
*/

//orden o(n)
const totalSum = (arr) => {
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

  //variables
  let totalSum = 0;

  //algoritmo
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }

  return totalSum;
};

//50:36
//metodo utilizando un diccionario orden o(A) + o(B)
const twoSubstractK = (arrA, arrB, k) => {
  //validaciones
  if (!(arrA instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arrA) {
    if (number === undefined)
      return "Error: Uno o mas elementos del arreglo de numeros no esta definido";
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
    if (Math.sign(number) === -1)
      return "Error: Uno o mas elementos del arreglo de numeros es un numero negativo";
    if (!Number.isInteger(number))
      return "Error: uno o mas elementos del arreglo de numeros no es un numero entero";
  }
  if (!(arrB instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of arrB) {
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
  let aElement = {};

  //algoritmo
  for (let i = 0; i < arrA.length; i++) {
    aElement[i] = 1;
  }

  for (let j = 0; j < arrB.length; j++) {
    if (aElement[k + arrB[j]] !== undefined) {
      let aElementChange = k + arrB[j];
      let bElementChange = arrB[j];
      return [aElementChange, bElementChange];
    }
  }
};

//variables
let A = [7, 3, 2, 4];
let B = [6, 1, 5];
let totalSumA = totalSum(A); //16
let totalSumB = totalSum(B); //12
let dif = (totalSumA - totalSumB) / 2; //4
let solucion = twoSubstractK(A, B, dif);

//resultados
console.info(solucion);
