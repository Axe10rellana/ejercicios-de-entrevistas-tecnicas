/*
  1. Dado un string, cree una funcion reverse que invierta el orden de sus caracteres.
  Ejemplo: "hello world" = "dlrow olleh". No puede utilizarse desestructuracion ni
  recursion.
  2. Dado un string, cree una funcion que invierta el orden de sus caracteres. Debe de
  utilizar una desestructuracion en el proceso.
  3. Dado un string, invierta el orden de sus caracteres recursivamente.
  4. Dado un string, invierta el orden de sus caracteres sin utilizar un nuevo string (realice las modificaciones en el propio string).
  5. construya una funcion isPalindrome, la cual dado un string nos indique si es palindromo o no.
  Ejemplo de palindromo: "Yo dono rosas, oro no doy"
  6. Ejercicio opcional: Por ultimo, intente invertir las palabras de una frase, pero cada palabra debe
  mantenerse en el lugar Ejemplo: "Hello world" = "olleH dlrow"
*/

/* Ejercicio n1 */
//variables
const myText = "hello world";
const reverse = (myText) => {
  //validaciones
  if (myText === "" || myText === undefined)
    return "Error: Se esperaba un texto";
  if (typeof myText !== "string")
    return "Error: El texto debe ser una cadena de texto";

  //variables
  let textReverse = "";

  //algoritmo
  for (let letter of myText) {
    textReverse = letter + textReverse;
  }

  return textReverse;
};
//resultados
console.info(reverse(myText));

/* Ejercicio n2 */
//variables
const myText2 = "hello world";
const reverseWithDestructuration = (myText2) => {
  //validaciones
  if (myText2 === "" || myText2 === undefined)
    return "Error: Se esperaba un texto";
  if (typeof myText2 !== "string")
    return "Error: El texto debe ser una cadena de texto";

  //variables
  let textReverse = [...myText2];

  //algoritmo
  return textReverse.reverse().join("");
};
//resultado
console.info(reverseWithDestructuration(myText2));

/* Ejercicio n3 */
//variables
const myText3 = "hello world";
const reverseWithRecursion = (myText3) => {
  //validaciones
  if (myText3 === undefined) return "Error: Se esperaba un texto";
  if (typeof myText3 !== "string")
    return "Error: El texto debe ser una cadena de texto";
  if (myText3 === "") {
    return "";
  }

  //variables
  let subText = myText3.substring(1);

  //algoritmo
  return reverseWithRecursion(subText) + myText3.charAt(0);
};
//resultado
console.info(reverseWithRecursion(myText3));

/* Ejercicio n4 */
/* Respuesta: No se puede invertir el orden de los caracteres sin utilizar un nuevo string, porque los strings en javascript son inmutables */

/* Ejercicio n5 */
//variables
const myText5 = "Yo dono rosas, oro no doy";

//funciones
const clearText = (myText5) => {
  return myText5.toLowerCase().split(" ").join("").split(",").join("");
};

const isPalindrome = (myText5) => {
  //validaciones
  if (myText5 === "" || myText5 === undefined)
    return "Error: Se esperaba un texto";
  if (typeof myText5 !== "string")
    return "Error: El texto debe ser una cadena de texto";

  //variables
  let myClearText = clearText(myText5);

  //algoritmo
  return myClearText === reverse(myClearText);
};
//resultados
console.info(isPalindrome(myText5));

/* Ejercicio opcional */
const myText6 = "hello world";
const reverseWord = (myText6) => {
  //validaciones
  if (myText6 === "" || myText6 === undefined)
    return "Error: Se esperaba un texto";
  if (typeof myText6 !== "string")
    return "Error: El texto debe ser una cadena de texto";

  //variables
  let myTextArr = myText6.split(" ");
  let texto = "";

  //algoritmo
  for (let word of myTextArr) {
    texto = texto + reverse(word) + " ";
  }
  return texto;
};
//resultado
console.info(reverseWord(myText6));
