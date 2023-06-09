//importaciones
import React, { useState, useEffect, useMemo } from "react";

//hooks
import useDebounce from "./hooks/useDebounce";

//api
import api from "./api/api";

//componentes
import Loading from "./components/Loading";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Products from "./components/Products";
import Recommended from "./components/Recommended";

//estilos css
import styles from "./styles/app.module.css";

//variables
const initialQuery = "";
const ALPHABETICAL = "ALPHABETICAL";
const PRICE = "PRICE";
const queryDataPersistent = localStorage.getItem("query") || initialQuery;
const sortDataPersistent = localStorage.getItem("sort") || ALPHABETICAL;

const App = () => {
  //variables de estado
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(queryDataPersistent);
  const [sort, setSort] = useState(sortDataPersistent);

  //hooks
  const queryDebouncedValue = useDebounce(query, 300);

  //useEffect
  useEffect(() => {
    api.search(queryDebouncedValue).then((products) => {
      const productsWithFavKey = products.map((product) => ({
        ...product,
        favourite: false,
      }));

      setProducts(productsWithFavKey);
    });
  }, [queryDebouncedValue]);

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("sort", sort);
  }, [sort]);

  //funciones
  const handleToggleFavourite = (id) => {
    setProducts((previousProducts) => {
      return previousProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            favourite: !product.favourite,
          };
        }

        return product;
      });
    });
  };

  //variables memoizadas
  const sortedItems = useMemo(() => {
    let result = [...products];

    if (sort === ALPHABETICAL) {
      result.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      });
    }

    if (sort === PRICE) {
      result.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
      });
    }

    return result;
  }, [sort, products]);

  //validaciones
  if (!products.length > 0) {
    return <Loading />;
  }

  return (
    <main className={styles.main}>
      <h1>Tienda DigitalOncy</h1>
      <Search query={query} setQuery={setQuery} />
      <Sort
        sort={sort}
        setSort={setSort}
        ALPHABETICAL={ALPHABETICAL}
        PRICE={PRICE}
      />
      <Products
        handleToggleFavourite={handleToggleFavourite}
        sortedItems={sortedItems}
      />
      <hr />
      <Recommended />
    </main>
  );
};

export default App;
