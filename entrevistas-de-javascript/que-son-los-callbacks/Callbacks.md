## ¿Qué son los callbacks?

Los callbacks son funciones que se pasan como parámetro a otra función, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

## ¿Qué entiendes del funcionamiento de los callbacks? (Referencia vs Invocación)

Por referencia: Es cuando se tiene una función que no lleva paréntesis.

```js
let numeros = [1, 2, 3, 4, 5, 6];
const multiplicarPorDos = (numero) => console.info(numero * 2);

numeros.map(multiplicarPorDos);
```

Por invocación: Es cuando se tiene una función que lleva paréntesis.

```js
let numeros = [1, 2, 3, 4, 5, 6];
const multiplicarPorDos = (numero) => console.info(numero * 2);

numeros.map((numero) => multiplicarPorDos(numero));
```

## ¿Qué ejemplos de callbacks conoces?

Los callbacks se pueden utilizar de las siguientes maneras:

- Dentro una promesa de un fetch, dentro de un map, filter, reduce, etc.

```js
const url = "https://ejemplo.com/api/data";
const getData = fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    return response.json();
  })
  .then((data) => {
    console.info(data);
    return data;
  })
  .catch((error) => {
    console.error(error);
  });

const arr = [1, 2, 3, 4, 5];
arr.map((num) => num * 2);
arr.filter((num) => num % 2 === 0);

const suma = arr.reduce((acc, current) => {
  return acc + current;
}, 0);

console.info(suma);
```

- En react se las utiliza en el hook useEffect.

```js
import { useEffect } from "react";

useEffect(() => {
  console.info("se ejecuta al inicio");
}, []);
```

- También se las utiliza para asignarlas a una variable en un arrow function.

```js
let num1 = 5;
let num2 = 9;

const sumarNumeros = (num1, num2) => num1 + num2;
const result = sumarNumeros(num1, num2);

console.info(result);
```
