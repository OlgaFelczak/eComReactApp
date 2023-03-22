import React, { useEffect } from 'react';
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
import axios from 'axios';

const Header = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const responseApiProducts = await axios.get(
        'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
      );
      setProducts(responseApiProducts.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar className='navBar' expand='lg'>
        <Navbar.Brand href='/'>
          <img
            src={'/Images/logo.png'}
            width='110'
            height='110'
            className='d-inline-block align-top img-navbar'
            alt='Makeup Junkie logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <h1 className='navbar-title'>Make-Up Junkie</h1>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Container className='navbar-container'>
            <Nav.Item className='navBar-link active'>
              <Nav.Link href='/store'>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navBar-link active'>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
          </Container>

          <div className='links'>
            <Nav.Link className='cart' href='#action2'>
              <div className='cart-quantity'>{productCount}</div>
              <FaShoppingCart className='cart-icon' onClick={handleShow} />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items?.map((currentProduct) => {
                const product = products.find(
                  (prd) => prd.id === currentProduct.id
                );

                if (product) {
                  return (
                    <CartItem
                      key={product.id}
                      id={product.id}
                      quantity={currentProduct.quantity}
                      name={product.name}
                      price={product.price}
                    ></CartItem>
                  );
                }
              })}

              <h1>Total: £{cart.getTotalCost(products)}</h1>

              <Button
                variant='success'
                // onClick={checkout}
                href='/success'
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
