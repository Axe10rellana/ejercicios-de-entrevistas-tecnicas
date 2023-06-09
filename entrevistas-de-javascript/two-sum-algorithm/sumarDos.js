/*
  Enunciado Ejercicio N°11:
  Crear una función a la cual le pase un array de numeros y un numero que será el resultado de la suma de dos de los valores

  Ejemplos:
  sumarDos([3,7,8,2], 10) //[3,7] (ambos suman 10)
  sumarDos([4,5,9,1], 10) //[9,1]
  sumarDos([1,2,3,4], 5) //[1,4]
*/

function sumarDos(numeros, resultado) {
  //validaciones
  if (!(numeros instanceof Array))
    return console.error("El valor debe ser un array");

  if (numeros.length === 0)
    return console.error("El array no debe estar vacio");

  for (let numero of numeros) {
    if (typeof numero !== "number")
      return console.error("El valor debe ser un numero");

    if (!Number.isInteger(numero))
      return console.error("El numero debe ser entero");

    if (Math.sign(numero) === -1)
      return console.error("El numero no debe ser negativo");
  }

  if (typeof resultado !== "number")
    return console.error("El valor debe ser un numero");

  if (!Number.isInteger(resultado))
    return console.error("El numero debe ser entero");

  if (Math.sign(resultado) === -1)
    return console.error("El numero no debe ser negativo");

  if (resultado === 0) return console.error("El numero no debe ser 0");

  //variables
  const numerosSet = new Set(numeros);

  //algoritmo
  for (const primerNumero of numeros) {
    const segundoNumero = resultado - primerNumero;
    if (numerosSet.has(segundoNumero) && segundoNumero !== primerNumero)
      return [primerNumero, segundoNumero];
  }

  return [];
}

//resultados
console.info(sumarDos([3, 7, 8, 2], 10));
console.info(sumarDos([4, 5, 9, 1], 10));
console.info(sumarDos([1, 2, 3, 4], 5));
