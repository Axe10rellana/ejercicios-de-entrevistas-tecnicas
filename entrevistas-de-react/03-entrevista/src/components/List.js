//importaciones
import React from "react";
import styles from "../styles/app.module.css";

const List = ({ item, handleToggle, handleRemove }) => {
  return (
    <div className={styles.list}>
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
  );
};

export default List;
