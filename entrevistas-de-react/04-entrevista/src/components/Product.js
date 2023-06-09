//importaciones
import React from "react";

//estilos css
import styles from "../styles/app.module.css";

const Product = ({ product, handleToggleFavourite }) => {
  return (
    <li
      onClick={() => handleToggleFavourite(product.id)}
      className={
        product.price <= 100 && product.favourite === true
          ? styles.favAndSale
          : "" || product.favourite === true
          ? styles.fav
          : "" || product.price <= 100
          ? styles.sale
          : ""
      }
    >
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

export default Product;
