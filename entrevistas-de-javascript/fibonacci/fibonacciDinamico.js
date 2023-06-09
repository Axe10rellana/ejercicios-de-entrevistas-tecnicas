//funciones
const fibonacciDinamico = (n, mem) => {
  //validaciones
  if (n === undefined) return "Error: Debe pasar un numero";
  if (typeof n !== "number") return "Error: Se esperaba un numero";
  if (Math.sign(n) === -1) return "Error: El numero no puede ser negativo";
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!(mem instanceof Array))
    return "Error: Se esperaba un arreglo de numeros";
  for (const number of mem) {
    if (typeof number !== "number")
      return "Error: Uno o mas elementos del arreglo de numeros no es un numero";
  }

  //algoritmo
  if (mem[n] === undefined) {
    mem[n] = fibonacciDinamico(n - 1, mem) + fibonacciDinamico(n - 2, mem);
  }

  return mem[n];
};

const fibonacci = (n) => {
  return fibonacciDinamico(n, []);
};

//resultado
console.info(fibonacci(5));

//orden del algoritmo: o(n)