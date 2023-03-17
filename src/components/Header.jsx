import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  return (
    <Navbar className='navBar' expand="lg">
    <Navbar.Brand href="#">
        <img
            src=""
            width="80"
            height="80"
            className="d-inline-block align-top img-navbar"
            alt="Makeup Junkie logo"
        />
    </Navbar.Brand>
    <h1 className='navbar-title'>Make-Up Junkie</h1>

    <Container className='search-bar justify-content-end'>
        <Form className="d-flex">
            <Form.Control

                type="search"
                placeholder="Search"
                className="search"
                aria-label="Search"
            />

            <Button className='btn-search'><FaSearch className='search-icon' /></Button>
        </Form>

    </Container>

    <div className='links'>
        <Nav.Link className='login' href="#action1"><FaUser className='login-icon' /></Nav.Link>
        <Nav.Link className='cart' href="#action2"><FaShoppingCart className='cart-icon' /></Nav.Link>
    </div>

</Navbar>
  )
}

export default Header