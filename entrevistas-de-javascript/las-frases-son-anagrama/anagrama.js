//variables
const anagramaForm = document.querySelector("#anagramaForm");
const mensaje = document.querySelector("#mensaje");

//funciones
const clearInputs = (e) => {
  e.target.word1.value = "";
  e.target.word2.value = "";
};

const cleanString = (word) => {
  //validaciones
  if (word === "" || word === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word !== "string")
    return "Error: La palabra no es una cadena de texto";

  //algoritmo
  return word.replaceAll(" ", "").toLowerCase();
};

const wordToMap = (word) => {
  //validaciones
  if (word === "" || word === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word !== "string")
    return "Error: La palabra no es una cadena de texto";

  //variables
  let letterMap = {};

  //algoritmo
  for (let letter of word) {
    if (letterMap[letter] === undefined) {
      letterMap[letter] = 1;
    } else {
      letterMap[letter] += 1;
    }
  }

  return letterMap;
};

/* orden del algorimto: o(n) pero usa un objeto extra */
const isAnagrama = (word1, word2) => {
  //validaciones
  if (word1 === "" || word1 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word1 !== "string")
    return "Error: La palabra no es una cadena de texto";
  //validaciones
  if (word2 === "" || word2 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word2 !== "string")
    return "Error: La palabra no es una cadena de texto";

  //algoritmo
  word1 = cleanString(word1);
  word2 = cleanString(word2);
  if (word1.length === word2.length) {
    let mapWord1 = wordToMap(word1);
    let mapWord2 = wordToMap(word2);
    for (let letter of Object.keys(mapWord1)) {
      if (!(mapWord1[letter] === mapWord2[letter])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

//eventos
anagramaForm.addEventListener("submit", (e) => {
  //variables
  e.preventDefault();
  let word1 = e.target.word1.value;
  let word2 = e.target.word2.value;
  let isAnagramaBool = isAnagrama(word1, word2);
  let messageTextElement;

  //algoritmo
  if (isAnagramaBool) {
    messageTextElement = "es un anagrama";
  } else {
    messageTextElement = "no es un anagrama";
  }
  mensaje.textContent = messageTextElement;
  clearInputs(e);
});

/* orden del algoritmo: o(n) pero es menos legible
const isAnagrama = (word1, word2) => {
  //validaciones
  if (word1 === "" || word1 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word1 !== "string")
    return "Error: La palabra no es una cadena de texto";
  //validaciones
  if (word2 === "" || word2 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word2 !== "string")
    return "Error: La palabra no es una cadena de texto";
  
  word1 = cleanString(word1);
  word2 = cleanString(word2);

  if (word1.length === word2.length) {
    let mapWord1 = wordToMap(word1);
    for (let letter of Object.keys(mapWord1)) {
      if (mapWord1[letter] !== undefined) {
       mapWord1[letter] -= 1;
      }else{
        return false;
      }
    }
    return true;
  }
  
  return false;
};
*/

/* orden del algoritmo: o(n log(n)) 
const isAnagrama = (word1, word2) => {
  //validaciones
  if (word1 === "" || word1 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word1 !== "string")
    return "Error: La palabra no es una cadena de texto";
  //validaciones
  if (word2 === "" || word2 === undefined)
    return "Error: Se esperaba una palabra";
  if (typeof word2 !== "string")
    return "Error: La palabra no es una cadena de texto";

  word1 = cleanString(word1);
  word2 = cleanString(word2);
  word1 = word1.split("").sort().join("");
  word2 = word2.split("").sort().join("");

  return word1 === word2;
};
*/
