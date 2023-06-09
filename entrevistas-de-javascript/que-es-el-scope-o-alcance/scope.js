//variables
let userName = "algo";

//utiliza la variable que esta en el scope que contiene a la funcion
function printName() {
  console.info(userName);
}

//en este scope se reescribe la variable que esta en el scope que contiene a la funcion, la variable del scope global no cambia
function printName2() {
  let userName = "some";
  console.info(userName);
}

//en este scope se reescribe la variable que esta en el scope que contiene a la funcion, la variable del scope global tambien cambia
function printName3() {
  userName = "some";
  console.info(userName);
}

//resultados
printName();
printName2();
printName3();
