import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal'; 
import CartItem from './CartItem';


import { useState } from 'react'; 
import { CartContext } from './CartContext'; 
import { useContext } from 'react'; 


import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {

  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <> 

    <Navbar className='navBar' expand='lg'>
      <Navbar.Brand href='#'>
        <img
          src={'/Images/logo.png'}
          width='80'
          height='80'
          className='d-inline-block align-top img-navbar'
          alt='Makeup Junkie logo'
        />
      </Navbar.Brand>
      <h1 className='navbar-title'>Make-Up Junkie</h1>

      <Container className='search-bar justify-content-end'>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='search'
            aria-label='Search'
          />

          <Button className='btn-search'>
            <FaSearch className='search-icon' />
          </Button>
        </Form>
      </Container>

      <div className='links'>
        <Nav.Link className='login' href='#action1'>
          <FaUser className='login-icon' />
        </Nav.Link>
        <Nav.Link className='cart' href='#action2'>
          <FaShoppingCart className='cart-icon'
           onClick={handleShow} 
           />({productCount})
        </Nav.Link>
      </div>
    </Navbar>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productCount > 0 ?
        <>
        <p>Items in your cart:</p>
        {cart.items.map((currentProduct, idx) => (
          <CartItem key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartItem>
        ) )}
          <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

          <Button variant='success'>Purchase Items</Button>
        </>
      :
        <h1>There are no items in your cart</h1>  
      }
        {/* <h1>Modal body</h1> */}
      </Modal.Body>
      </Modal>  

    </> 
  );
};

export default Header;
