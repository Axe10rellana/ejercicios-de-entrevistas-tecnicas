/*
  Ejericio n1: Dado un numero, mostrar su serie fibonacci.
  La serie fibonacci es un orden de numeros donde cada
  numero es la suma de los dos anteriores.

  Ejemplos:
  fib(10)[0]
  fib(10)[1]

  Serie completa: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  Resultado de la serie: 55

  Como hacerlo:
  - Crear una funcion con parametro numero
  - Crear variable con dos primeros numeros de la serie
  - Bucle desde el dos al numero
  - Sumar los dos valores anteriores al numero actual
  - Devolver el resultado
*/

//funcion
const fibonacci = (number) => {
  //validaciones
  if (typeof number !== "number")
    return console.error("El valor ingresado no es un numero");
  if (!Number.isInteger(number))
    return console.error("El numero debe ser entero");
  if (Math.sign(number) === -1)
    return console.error("El numero no puede ser negativo");
  if (number === 0) return 0;
  if (number === 1) return 1;

  //variables
  let serie = [0, 1];

  //algoritmo
  for (let i = 2; i <= number; i++) {
    let element = serie[i - 1] + serie[i - 2];
    serie.push(element);
  }

  return [serie, serie[number]];
};

//resultado
console.info("Serie Completa", fibonacci(10)[0]);
console.info("Resultado Fibonacci", fibonacci(10)[1]);

//orden del algoritmo: o(n2)
