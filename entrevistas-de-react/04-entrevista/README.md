# Entrevista tecnica de React.js

## Descripción

codigo base del ejercicio donde se resuelve una Entrevista tecnica en React en fase de desarrollo.

## comandos

- npm start
- npm run test
- npm run build

## nivel junior

## nivel 1

- no se muestran los productos al cargar la aplicacion.
- los datos no se mostraban porque faltaba pasarle a la promesa del api un .then con la funcion setProducts
  api.search(query).then(setProducts);

## nivel 2

- cuando buscamos no se muestran productos.
- para que la busqueda muestre los productos hay que pasarle al onChange el setQuery y pasarle el value del evento
  onChange={(e) => setQuery(e.target.value)}

## nivel 3

- los productos que salen 100 o menos deben tener la clase "sale" activada.
<li className={products.price <= 100 ? styles.sale : ""}>{products.name}</li>

## extra

- la aplicacion tarda uno segundos hasta mostrar los productos sin mostrar un "cargando..."

if(!products.length){
return(

  <main>
   <h1>Cargando...</h1>
  </main>
 );
}

## nivel semi senior

## nivel 1

- el search debe ser case insensitive.
- para que el search sea case insensitive se le paso al title y a la query un toLowerCase();
  if (query) {
  results = results.filter((product) => {
  const productTitle = product.title.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  return productTitle.includes(normalizedQuery);
  });
  }

## nivel 2

- el precio no se muestra localizado para Argentina.
- para localizar el precio a Argentina se hace uso de la instancia new Intl.NumberFormat("idioma", {moneda}).format(numero);
  <span>
  {new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  }).format(product.price)}  
  </span>

## nivel 3

- agregar un select para ordenar los resultados alfabeticamente o por precio.
- importar useMemo
  import React, { useMemo } from "react";

- variables
  const ALPHABETICAL = "ALPHABETICAL";
  const PRICE = "PRICE";

- variables de estado
  const [sort, setSort] = useState(ALPHABETICAL);

- variables memoizadas
- funcion que ordena los productos sin modificar el array original de acuerdo a lo que es igual la variable de estado sort
- se uso el hook useMemo para poder pasarle la funcionalidad y tambien las dependencias que son las variables de estado sort
  y products
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

- en el onChange del select le pasamos el setSort y dentro le pasamos el value del evento
- en el value del select se le pasa la variable de estado sort
- en las opciones del select en el value le pasamos las variables que queremos usar para cambiar el orden de los productos
  <select
  name="sort"
  value={sort}
  onChange={(e) => setSort(e.target.value)}

  >

    <option value={ALPHABETICAL} label="Nombre" />
    <option value={PRICE} label="Precio" />
  </select>

- remplazar el products.map por el sortedItems.map
  {sortedItems.map((product) => (...)}

## extra

- la query y la preferencia de orden deberian persistirse al recargar la pagina.
- creamos las variables necesarias para usar el localstorage
  const initialQuery = "";
  const ALPHABETICAL = "ALPHABETICAL";
  const PRICE = "PRICE";
  const queryDataPersistent = localStorage.getItem("query") || initialQuery;
  const sortDataPersistent = localStorage.getItem("sort") || ALPHABETICAL;

- guardamos en el useState la variable de tipo corto circuito que evalua si obtenemos el valor guardado en getItem o usamos
  la variable que viene por default
  const [query, setQuery] = useState(queryDataPersistent);
  const [sort, setSort] = useState(sortDataPersistent);

- usamos un useEffect por cada cosas que queremos guardar en el localstorage del navegador, le pasamos el setItem y le pasamos
  como dependencia la variable de estado que queremos controlar
  useEffect(() => {
  localStorage.setItem("query", query);
  }, [query]);

  useEffect(() => {
  localStorage.setItem("sort", sort);
  }, [sort]);

- se agrego el query al value del input
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

## nivel senior

## nivel 1

- los recomendados cambian cada vez que cambia la query.
- se importa useMemo
  import React, {useMemo} from "react";

- variables de estado
  const [products, setProducts] = useState([]);

- useEffect
  useEffect(() => {
  api.search().then(setProducts);
  }, []);

- funcion que utiliza useMemo y a lo que viene del array de productos le pasa un sort que ordena
- de manera aleatoria y con el slice solo optiene 2 resultados y se le pasa como dependencia el array
- de productos. Luego a la funcion se le hace un map...
  const twoRandomProducts = useMemo(
  () => [...products].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 2),
  [products]
  );

## nivel 2

- el search esta desfazado y se llama muy frecuentemente.
- importaciones
  import { useState, useEffect } from "react";

- creamos una funcion que pasandole una query y delay se ejecuta la query con un delay
  const useDebounce = (value, delay) => {

  - variables de estado
    const [debouncedValue, setDebouncedValue] = useState(value);

  - hacemos un useEffect que contiene el setTimeout que va a ejecutar el delay
    useEffect(() => {

    - setTimeout de la query
      const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
      }, delay);

    return () => clearTimeout(timeoutId);
    }, [value, delay]);

  return debouncedValue;
  };

- importamos el hook useDebounce
  import useDebounce from "../hooks/useDebounce";

- en el componente app usamos el hook
  const queryDebouncedValue = useDebounce(query, 300);

- usamos la variable queryDebouncedValue el useEffect
  useEffect(() => {
  api.search(queryDebouncedValue).then(setProducts);
  }, [queryDebouncedValue]);

## nivel 3

- debemos poder agregar y quitar productos a favoritos clickeandolos, los productos en favoritos deben
  tener una clase "fav". (hacer clickeables los productos de la lista, funcionalidad toggle)

- en el archivo de css crear las clases fav y favAndSale
  .fav {
  border: 3px solid var(--color-12);
  }
  .favAndSale {
  color: var(--color-01);
  background-color: var(--color-17);
  border: 3px solid var(--color-12);
  }

- en el useEffect dentro del then de la api se crea una variable que recibe el array de productos
- y por cada producto se obtiene una nueva clave llamada favourite y luego la variable se la pasa al setProducts.
  useEffect(() => {
  api.search(queryDebouncedValue).then((products) => {
  const productsWithFavKey = products.map((product) => ({
  ...product,
  favourite: false,
  }));
  setProducts(productsWithFavKey);
  });
  }, [queryDebouncedValue]);

- se crea una funcion handleToggleFavourite donde en el estado previo del setProducts se hace una
- validacion y por cada producto se compara el id del producto con el id que se recibe por parametro y
- en la clave favourite se modifica el valor colocando el valor contrario por cada vez que se hace click
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

- en la li en el onClick se pasa la funcion handleToggleFavourite con el product.id y en el className
- del li se hacen dos condicionales mas al del price, en uno se valida si el producto tiene la clave
- favourite en true, y en el otro tambien se valida si el product.price es menor o igual a 100, colocando
- las clases de css correspondientes
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

## extra

- los favoritos deben persistirse cuando recargamos la pagina. (localstorage)
