//importaciones
import React from "react";
import List from "./List";

const ListContainer = ({ items, handleToggle, handleRemove }) => {
  return (
    <ul>
      {items?.map((item) => (
        <List
          key={item.id}
          item={item}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

export default ListContainer;
