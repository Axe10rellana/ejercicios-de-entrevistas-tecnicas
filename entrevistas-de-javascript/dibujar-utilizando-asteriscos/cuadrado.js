/*
  Enunciado Ejercicio N°6
  Dibujar un cuadrado hueco con asteriscos.

  Ejemplos:
  cuadrado(4)

  Devuelve:

  ****
  *  *
  *  *
  ****

  Como hacerlo
  - Función para crear el lado de arriba y abajo del cuadrado
  - Función que haga los lados y el hueco del cuadrado
  - Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo
  - Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq y derc
  - Ir concatenando en una variable cada linea del cuadrado
  - Mostrar el cuadrado en la función principal
*/

function cuadrado(numero) {
  //validaciones
  if (typeof numero !== "number")
    return console.error("El valor debe ser de tipo numero");

  if (!Number.isInteger(numero))
    return console.error("El numero debe ser entero");

  if (Math.sign(numero) === -1)
    return console.error("El numero no debe ser negativo");

  //variables
  let dibujo = "*".repeat(numero) + "\n";
  const contenido = "*" + " ".repeat(numero - 2) + "*";

  //algoritmo
  for (let i = 0; i < numero - 2; i++) dibujo += contenido + "\n";
  dibujo += "*".repeat(numero);
  return dibujo;
}

//resultados
console.info(cuadrado(4));
