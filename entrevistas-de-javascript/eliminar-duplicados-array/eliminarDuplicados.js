//variables
let array = [2, 3, 7, 4, 5, 6, 1, 1, 9, 8].sort();

//funcion
const removeDuplicates = (array) => {
  //validaciones
  if (!(array instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of array) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //algoritmo
  let mySet = new Set(array);
  return Array.from(mySet);
};

//resultado
console.info(removeDuplicates(array));

//orden del algoritmo: o(n2)