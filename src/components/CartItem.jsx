import { Button } from 'react-bootstrap';
import { CartContext } from '../store/CartContext';
import { useContext } from 'react';
import React from 'react';

function CartItem({ id, quantity, name, price }) {
  const cart = useContext(CartContext);

  return (
    <>
      <h5>{name}</h5>
      <p>{quantity} total</p>
      <p>£{quantity * parseFloat(price)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove from cart
      </Button>
      <hr></hr>
    </>
  );
}

export default CartItem;
