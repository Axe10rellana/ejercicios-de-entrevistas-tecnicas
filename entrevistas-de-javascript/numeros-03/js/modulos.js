/*
    Ejericicios
    15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
    16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
    17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

//ejecucion del codigo
//ejercicio 15
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste ningun numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} No es un numero`);

  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");

  if (typeof base !== "number")
    return console.error(`El valor ${base} No es un numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir No es valido");
  }
};
convertirBinarioDecimal(100, 2);

//ejercicio 16
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");

  if (typeof monto !== "number")
    return console.error(`El valor ${monto} No es un numero`);

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");

  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} No es un numero`);

  if (Math.sign(descuento) === -1)
    return console.error(`El descuento no puede ser negativo`);

  return console.info(
    `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
  );
};
aplicarDescuento(1000, 20);

//ejercicio 17
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!(fecha instanceof Date))
    return console.error(`El valor ${fecha} No es una fecha valida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};
calcularAnios(new Date(1996, 4, 3));
