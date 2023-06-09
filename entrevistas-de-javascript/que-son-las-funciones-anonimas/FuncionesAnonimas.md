## ¿Qué es una función anónima?

Una función anónima es una función que no tiene nombre.

## ¿Cuál es su diferencia con las funciones clásicas?

La primera diferencia es que las funciones anónimas no tienen nombre. La segunda diferencia es que para ejecutar una función anónima se puede hacer de varias formas, la primera es volver la función autoejecutable, la segunda es asignarla a una variable para ejecutarla después.

## ¿Les encuentras alguna desventaja?

Una desventaja es que se puede confundir una función anónima con otro tipo de funciones.

## ¿Cuándo la usarías?

Las funciones anónimas se utilizan para crear funciones autoejecutables.

```js
(() => {
  console.info("se ejecuta al inicio");
})();
```

También se las utiliza como un callback por ejemplo dentro una promesa de un fetch, dentro de un map, filter, reduce, etc.

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

También en react se las utiliza en el hook useEffect.

```js
import { useEffect } from "react";

useEffect(() => {
  console.info("se ejecuta al inicio");
}, []);
```

También se las utiliza para asignarlas a una variable en un arrow function.

```js
let num1 = 5;
let num2 = 9;

const sumarNumeros = (num1, num2) => num1 + num2;
const result = sumarNumeros(num1, num2);

console.info(result);
```
