//importaciones
import React, { useState, useEffect } from "react";
import styles from "./styles/app.module.css";
import api from "./api/api";

//componentes
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";

//variables
const initialState = "";

const App = () => {
  //variables de estado
  const [items, setItems] = useState([]);
  const [input, setInput] = useState(initialState);

  //funciones
  const clearInput = () => {
    setInput(initialState);
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const add = (e) => {
    e.preventDefault();
    if (e.target.text.value === "") return;
    setItems([...items, { id: +new Date(), text: input, completed: false }]);
    /* setItems(
      items.concat({
        id: +new Date(),
        text: input,
        completed: false,
      })
    ); */
    clearInput();
  };

  //useEffect
  useEffect(() => {
    api.list().then(setItems);
  }, []);

  //validaciones
  if (!items.length) {
    return (
      <main className={styles.main}>
        <h1>...loading</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1>Supermarket List</h1>
      <Form add={add} input={input} setInput={setInput} />
      <ListContainer
        items={items}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </main>
  );
};

export default App;
