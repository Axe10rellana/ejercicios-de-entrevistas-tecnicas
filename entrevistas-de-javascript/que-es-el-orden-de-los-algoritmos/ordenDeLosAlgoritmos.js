//variables
const arr = [1,2,3,4,5,6,7,8,9,10];

//oden o(1): tiene una cantidad de accesos de 1
const firstElement = (arr) => {
  return arr[0];
};

//orden o(n): tiene una cantidad de accesos constante 2,3,4...50M
const elements = (arr) => {
  return arr.map(item => item);
}

//resultados
console.info(firstElement(arr));
console.info(elements(arr));