//importaciones
import React, { useState, useEffect, useMemo } from "react";

//api
import api from "../api/api";

//componentes
import ProductsRecommended from "./ProductsRecommended";

//estilos css
import styles from "../styles/app.module.css";

const Recommended = () => {
  //variables de estado
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.search().then(setProducts);
  }, []);

  const twoRandomProducts = useMemo(
    () => [...products].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 2),
    [products]
  );

  return (
    <main className={styles.main}>
      <h1>Productos Recomendados</h1>
      <ProductsRecommended twoRandomProducts={twoRandomProducts} />
    </main>
  );
};

export default Recommended;
