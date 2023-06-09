//importaciones
import React from "react";

//componentes
import Product from "./Product";

const Products = ({ sortedItems, handleToggleFavourite }) => {
  return (
    <ul>
      {sortedItems.map((product) => (
        <Product
          key={product.id}
          handleToggleFavourite={handleToggleFavourite}
          product={product}
        />
      ))}
    </ul>
  );
};

export default Products;
