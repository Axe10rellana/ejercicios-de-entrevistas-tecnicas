//importaciones
import React from "react";

//estilos css
import styles from "../styles/app.module.css";

const ProductRecommended = ({ product }) => {
  return (
    <li className={product.price <= 100 ? styles.sale : ""}>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>
        {new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(product.price)}
      </span>
    </li>
  );
};

export default ProductRecommended;
