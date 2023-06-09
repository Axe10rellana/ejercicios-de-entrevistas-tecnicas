//importaciones
import React from "react";
import styles from "../styles/app.module.css";

const Form = ({ add, input, setInput }) => {
  return (
    <form className={styles.form} onSubmit={add}>
      <input
        type="text"
        name="text"
        value={input}
        autoFocus
        autoComplete="off"
        required
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
      />
      <button className={styles.add} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
