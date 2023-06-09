function palindromo(palabra) {
  //validaciones
  if (typeof palabra !== "string")
    return console.error("El valor debe ser de tipo string");

  if (palabra === "") return console.error("El string no debe estar vacio");

  //algoritmo
  palabra = palabra.toLowerCase().split(" ").join("").split(",").join("");
  let invertida = "";
  for (let letra of palabra) invertida = letra + invertida;
  return invertida === palabra;
}

console.info("¿Es un palindromo? " + palindromo("otto"));
