import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import "../styles/productCard.css";
import { CartContext } from './CartContext';
import { useContext } from 'react';
// import { useState, useEffect } from 'react';

function ProductCard(props) {
  const product = props.product; 
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);

  
 
  return (
    <Card className='card'>
      <Card.Img className='imgStyle' variant="top" src={product.image} alt={product.imageAlt} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>£{product.price}</Card.Text>
        { productQuantity > 0 ?
        
        <>
        <Form as={Row}>
        <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
        <Col sm="6">
          <Button sm="6" className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
          <Button sm="6" className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
        </Col>
        </Form>
        <Button variant='danger' className='my-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
        </> 
        :
        <Button className='btn-add-cart' variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
         }
        
      </Card.Body>
    </Card>   
    //  <Card className='card'>
    //   <Card.Img className='imgStyle' variant="top" src={product.image} alt={product.imageAlt} />
    //   <Card.Body>
    //     <Card.Title>{product.title}</Card.Title>
    //     <Card.Text>{product.description}</Card.Text>
    //     <Card.Text>{product.price}</Card.Text>
    //     <Button variant="primary">Add to Cart</Button>
    //   </Card.Body>
    // </Card>      
  );
        }
export default ProductCard;