//importaciones
import React from "react";

//componentes
import ProductRecommended from "./ProductRecommended";

const ProductsRecommended = ({ twoRandomProducts }) => {
  return (
    <ul>
      {twoRandomProducts.map((product) => (
        <ProductRecommended key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsRecommended;
