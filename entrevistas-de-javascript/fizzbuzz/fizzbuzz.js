//funcion
const fizzbuzz = (num) => {
  //validaciones
  if (typeof num !== "number") {
    return "Se esperaba un numero, el argumento recibido no es un numero";
  }
  if (Math.sign(num) === -1) {
    return "El numero no puede ser negativo";
  }
  if (num === 0) return 0;

  //algoritmo
  const divisible = (divisor, num) => num % divisor === 0;
  if (divisible(3, num) && divisible(5, num)) return "fizzbuzz";
  if (divisible(3, num)) return "fizz";
  if (divisible(5, num)) return "buzz";

  return num;
};

const print = (num) => {
  if (typeof num !== "number") {
    return "Se esperaba un numero, el argumento recibido no es un numero";
  }

  //variables
  let result = "";

  //algoritmo
  for (let i = 0; i <= num; i++) {
    result += `${i}: ${fizzbuzz(i)}\n`;
  }

  return result;
};

//resultado
console.info(print(16));
