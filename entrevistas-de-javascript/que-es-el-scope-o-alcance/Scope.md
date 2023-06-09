## Utiliza la variable que está en el scope que contiene a la función.

```js
let userName = "algo";

function printName() {
  console.info(userName);
}

printName();
```

## En este scope se reescribe la variable que está en el scope que contiene a la función, la variable del scope global no cambia.

```js
let userName = "algo";

function printName2() {
  let userName = "some";
  console.info(userName);
}

printName2();
```

## En este scope se reescribe la variable que está en el scope que contiene a la función, la variable del scope global también cambia.

```js
let userName = "algo";

function printName3() {
  userName = "some";
  console.info(userName);
}

printName3();
```

## En un mismo scope no se puede declarar la misma variable más de una vez.

```js
let userName = "algo";
let userName = "some";
```
