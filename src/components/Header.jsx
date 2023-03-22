import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import CartItem from './CartItem';
import { useState } from 'react';
import { CartContext } from '../store/CartContext';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={'/Images/logo.png'}
            width="110"
            height="110"
            className="d-inline-block align-top img-navbar"
            alt="Makeup Junkie logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <h1 className="navbar-title">Make-Up Junkie</h1>
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="navbar-container">
            <Nav.Item className="navBar-link active">
              <Nav.Link href="/store">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navBar-link active">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
          </Container>
        </Navbar.Collapse>

        <div className="links">
          <Nav.Link className="cart" href="#action2">
            <div className="cart-quantity">{productCount}</div>
            <FaShoppingCart className="cart-icon" onClick={handleShow} />
          </Nav.Link>
        </div>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items?.map((currentProduct) => (
                <CartItem
                  key={currentProduct.id}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartItem>
              ))}

              <h1>
                Total: £{async () => (await cart.getTotalCost()).toFixed(2)}
                
              </h1>

              <Button variant="success" 
              // onClick={checkout}
              href="/success"
              >
                Purchase Items
              </Button>
            </>
          ) : (
            <h1>Your cart is empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
