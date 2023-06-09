# Entrevista tecnica de React.js

## Descripción

codigo base del ejercicio donde se resuelve una Entrevista tecnica en React en fase de desarrollo.

## comandos

- npm start
- npm run test
- npm run build

## nivel junior

## nivel 1

- hay un warning en la consola
- el warning se soluciona pasando el item.id en la propiedad key del contenedor de la lista

<div key={item.id} className={styles.list}>
  <li
   className={item.completed ? styles.completed : ""}
   onClick={() => handleToggle(item.id)}
   >
    {item.text}
   </li>
   <button
     className={styles.delete}
     type="button"
     onClick={() => handleRemove(item.id)}
    >
     X
   </button>
</div>

## nivel 2

- la aplicacion crashea al iniciar
  la variable de estado [items, setItems] esta inicializada en null en lugar de iniciar como un []

## nivel 3

- nuestra funcion de eliminar no esta implementada

const handleRemove = (id) => {
setItems((items) => items.filter((item) => item.id !== id));
};

## nivel 4

- quiero que el foco inicie en nuestro input
  <input autoFocus ... />

---

---

## nivel mid senior

## nivel 1

- nuestra aplicacion se recarga al agregar un elemento
  e.prenventDefault(); //colocar en la funcion add

## nivel 2

- nuestro input no se limpia al agregar elementos nuevos

const initialState = "";
const [input, setInput] = useState(initialState);
const clearInput = () => {
setInput(initialState);
}

## nivel 3

- nuestra funcion de add no esta implementada.

const add = (e) => {
e.preventDefault();
setItems([...items, { id: +new Date(), text: input, completed: false }]);
clearInput();
};

## extra

- nuestra aplicacion muestra el formulario vacio por unos segundos hasta que termina de cargar

if (!items.length) {
return (

<main className={styles.main}>
<h1>...loading</h1>
</main>
);
}

---

---

## nivel senior

## nivel 1

- podemos agregar elementos vacios
- para evitar que se agreguen elementos vacios se hace una validacion que detecte si el input esta vacio
  const add = (e) => {
  e.preventDefault();
  if (e.target.text.value === "") return;
  setItems([{ id: +new Date(), text: input, completed: false }]);
  clearInput();
  };

## nivel 2

- se agregan elementos vacios apesar de tener todo bien
- esto se soluciona dentro del manejador de los items pasar un array con lo que venga de los [...items, combinado
  con el nuevo item {...}]
  setItems([...items, { id: +new Date(), text: input, completed: false }]);

## nivel 3

- nuestra funcion de toggle no esta implementada

const handleToggle = (id) => {
setItems((items) => items.map(item) => item.id === id ? {...item, completed: !item.completed} : item)
};

## extra

- quiero simular un delay en la carga de datos de 1 segundo
- para simular un delay en la carga de los datos de la api se envuelve el codigo en un setTimeOut(() => {codigo}, 1000)
  const api = {
  list: () =>
  new Promise((resolve) =>
  setTimeout(() => {
  resolve([
  {
  id: 1,
  text: "tarea 1",
  completed: false,
  },
  {
  id: 2,
  text: "tarea 2",
  completed: true,
  },
  {
  id: 3,
  text: "tarea 3",
  completed: false,
  },
  ]);
  }, 1000)
  ),
  };
