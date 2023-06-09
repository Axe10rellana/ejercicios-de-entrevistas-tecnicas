/* 
  Ejericicios
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//ejecucion del codigo
console.clear();

//ejercicio 9
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
aleatorio();

//ejercicio 10
const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un numero`);

  numero = numero.toString();
  let alReves = numero.split("").reverse("").join("");
  return numero === alReves
    ? console.info(
        `Si es capicua, Numero original ${numero}, Numero al reves ${alReves}`
      )
    : console.info(
        `No es capicua, Numero original ${numero}, Numero al reves ${alReves}`
      );
};
capicua(2002);

//ejercicio 11
const factorial = (numero = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste un ningun numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un numero`);

  if (Math.sign(numero) === -1)
    return console.error("El numero ingresado no puede ser negativo");

  if (numero === 0) return console.error("El numero ingresado no puede ser 0");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial del numero ${numero} es ${factorial}`);
};
factorial(5);
