//fibonacci iterativo
const fibonacciIterative = (n) => {
  //validaciones
  if (n === undefined) return "Error: Debe pasar un numero";
  if (typeof n !== "number") return "Error: Se esperaba un numero";
  if (Math.sign(n) === -1) return "Error: El numero no puede ser negativo";
  if (n === 0) return 0;
  if (n === 1) return 1;

  //variables
  let fib = [0, 1];

  //algoritmo
  for (let i = 2; i <= n; i++) {
    let element = fib[i - 1] + fib[i - 2];
    fib.push(element);
  }

  return fib;
};

//resultado
console.info(fibonacciIterative(9));

//orden del algoritmo: o(n2)

//fibonacci recursivo
const fibonacciElementRecursive = (n) => {
  //validaciones
  if (n === undefined) return "Error: Debe pasar un numero";
  if (typeof n !== "number") return "Error: Se esperaba un numero";
  if (Math.sign(n) === -1) return "Error: El numero no puede ser negativo";
  if (n === 0) return 0;
  if (n === 1) return 1;

  //algoritmo
  return fibonacciElementRecursive(n - 1) + fibonacciElementRecursive(n - 2);
};

//resultado
console.info(fibonacciElementRecursive(9));

//orden del algoritmo: o(2n)
