const palindromo = (texto) => {
  //validaciones
  if (typeof texto !== "string")
    return console.error("El valor debe ser de tipo string");

  if (texto === "") return console.error("El string no debe estar vacio");

  //algoritmo
  let invertido = texto.split("").reverse().join("");
  return invertido === texto;
};

console.info("¿Es un palindromo? " + palindromo("otto"));
