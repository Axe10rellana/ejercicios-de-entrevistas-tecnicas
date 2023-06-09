//variables
let text =
  "En esta entrevista vamos a contar las apariciones de caracteres en una palabra en javascript"
    .trim()
    .replaceAll(" ", "");
let myText = [...text];
let letterAmount = {};

//funcion
const countLetter = (letter, dict) => {
  if (dict[letter] === undefined) {
    dict[letter] = 1;
  } else {
    dict[letter]++;
  }
};
myText.forEach((letter) => countLetter(letter, letterAmount));

//resultados
console.info(letterAmount);

//orden del algoritmo: o(n)