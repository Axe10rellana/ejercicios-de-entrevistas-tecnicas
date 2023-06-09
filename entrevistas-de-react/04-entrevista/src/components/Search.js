//importaciones
import React from "react";

//estilos css
import styles from "../styles/app.module.css";

const Search = ({ query, setQuery }) => {
  return (
    <input
      name="text"
      placeholder="tv"
      type="text"
      autoComplete="off"
      autoFocus
      className={styles.input}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
