/*
  Ejericicios
  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
  19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
  20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

//ejecucion del codigo
//ejercicio 18
const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");

  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado, No es una cadena de texto`
    );

  let vocales = 0;
  let consonantes = 0;
  cadena = cadena.toLowerCase();

  for (const letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};
contarLetras("Hola Mundo");

//ejercicio 19
const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste una cadena de texto");

  if (typeof nombre !== "string")
    return console.error(
      `El valor ${nombre} ingresado, No es una cadena de texto`
    );

  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`${nombre}, es un nombre valido`)
    : console.warn(`${nombre}, No es un nombre valido`);
};
validarNombre("axel");

//ejercicio 20
const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(
      `El valor ${email} ingresado, No es una cadena de texto`
    );

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`${email}, es un email valido`)
    : console.warn(`${email}, No es un email valido`);
};
validarEmail("axelorellana550@gmail.com");

//ejercicio fusion 19 y 20
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena)
    return console.warn("No ingresaste una cadena de texto a evaluar");
  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado, No es una cadena de texto`
    );
  if (patron === undefined)
    return console.warn("No ingresaste un patron a evaluar");
  if (!(patron instanceof RegExp))
    return console.error(
      `El valor ${patron} ingresado, No es una expresion regular valida`
    );

  let expReg = patron.test(cadena);

  return expReg
    ? console.info(`${cadena}, cumple con el patron ingresado`)
    : console.warn(`${cadena}, No cumple con el patron ingresado`);
};
validarPatron("axel", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/g);
validarPatron(
  "axelorellana550@gmail.com",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
