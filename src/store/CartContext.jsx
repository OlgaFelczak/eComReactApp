import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext({
  items: [],
  getProductQuantity: (id) => {},
  addOneToCart: (id) => {},
  removeOneFromCart: (id) => {},
  deleteFromCart: (id) => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [pageInit, setPageInit] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchProducts = async () => {
    const responseApiProducts = await axios.get(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
    );
    return responseApiProducts.data;
  };

  useEffect(() => {
    if (!window.localStorage.getItem('products')) setPageInit(true);

    if (cartProducts && pageInit) {
      window.localStorage.setItem('products', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    const localStorageProducts = JSON.parse(
      window.localStorage.getItem('products')
    );

    if (localStorageProducts) {
      setCartProducts(localStorageProducts);
      setPageInit(true);
    }
  }, []);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  async function getTotalCost() {
    let totalCost = 0;
    let products = await fetchProducts();

    cartProducts.map((cartItem) => {
      const productData = products.find(
        (product) => product.id === cartItem.id
      );
      console.log(productData);
      totalCost += productData.price * cartItem.quantity;
    });

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
