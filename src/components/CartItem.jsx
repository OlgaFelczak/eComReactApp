import { Button } from 'react-bootstrap';
import { CartContext } from '../store/CartContext';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

function CartItem(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    return await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
    );
  };

  useEffect(() => {
    fetchProducts().then((res) =>
      setProduct(res.data.find((product) => product.id === id))
    );
  }, []);

  return (
    <>
      <h3>{product.name}</h3>
      <p>{quantity} total</p>
      <p>£{(quantity * product.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove from cart
      </Button>
      <hr></hr>
    </>
  );
}

export default CartItem;
