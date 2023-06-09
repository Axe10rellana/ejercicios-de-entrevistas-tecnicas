const PRODUCTS = [
  {
    id: 1,
    title: "TV",
    description: "TV description...",
    price: 1000,
  },
  {
    id: 2,
    title: "PC",
    description: "PC description...",
    price: 200,
  },
  {
    id: 3,
    title: "Smartphone",
    description: "Smartphone description...",
    price: 50,
  },
];

const api = {
  search: (query) => {
    let results = PRODUCTS;

    if (query) {
      results = results.filter((product) => {
        const productTitle = product.title.toLowerCase();
        const normalizedQuery = query.toLowerCase();
        return productTitle.includes(normalizedQuery);
      });
    }

    return new Promise((resolve) => setTimeout(() => resolve(results), 1000));
  },
};

export default api;
