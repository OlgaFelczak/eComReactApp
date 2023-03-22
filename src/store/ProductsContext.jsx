import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext({
  products: [],
});

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    return await axios.get(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
    );
  };

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  const contextValue = {
    products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
