//variables
const arr = [15, 10, 30, 8, 0, 5, 5, 3, 2, 11];

//recorre el arreglo
for (let i = 0; i < arr.length; i++) {
  console.info(arr[i]);
}

console.info("-------------------");
console.info("-------------------");

//recorre el arreglo de manera reversa
for (let i = 9; i >= 0; i--) {
  console.info(arr[i]);
}

console.info("-------------------");
console.info("-------------------");

//dos indices recorren el arreglo
for (let i = 0; i < arr.length - 1; i++) {
  console.info(arr[i]);
  console.info(arr[i + 1]);
}

console.info("-------------------");
console.info("-------------------");

//imprimir los valores con el segundo indice teniendo el primer indice fijo utilizando el mismo arreglo
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.info(arr[j]);
  }
}

console.info("-------------------");
console.info("-------------------");

//imprimir los valores con el segundo indice teniendo el primer indice fijo utilizando el mismo arreglo de manera reversa
for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j >= i; j--) {
    console.info(arr[j]);
  }
}
