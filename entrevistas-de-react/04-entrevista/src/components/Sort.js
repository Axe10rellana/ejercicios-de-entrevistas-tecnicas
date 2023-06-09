//importaciones
import React from "react";

const Sort = ({ sort, setSort, ALPHABETICAL, PRICE }) => {
  return (
    <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value={ALPHABETICAL} label="Nombre" />
      <option value={PRICE} label="Precio" />
    </select>
  );
};

export default Sort;
