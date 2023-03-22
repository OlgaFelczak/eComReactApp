import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import '../styles/product.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../store/CartContext';

export async function loader({ params }) {
  const { data: products } = await axios.get(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
  );
  return products.find((product) => product.id === parseInt(params.productId));
}

const Product = () => {
  const product = useLoaderData();
  const cart = useContext(CartContext);
  console.log(product);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img
            className='product-img'
            src={product.image_link}
            alt={product.name}
          />
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className='col-2 my-5'>
              <Button variant='primary' href='/store'>
                Back
              </Button>
            </div>
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className='row'>
            <div className='col-4'>
              <span>£{product.price}</span>
            </div>
            <div className='col-8'>
              {productQuantity > 0 ? (
                <>
                  <Form as={Row}>
                    <Form.Label column='true' sm='6'>
                      In Cart: {productQuantity}
                    </Form.Label>
                    <Col sm='6'>
                      <Button
                        sm='6'
                        className='mx-2'
                        onClick={() => cart.addOneToCart(product.id)}
                      >
                        +
                      </Button>
                      <Button
                        sm='6'
                        className='mx-2'
                        onClick={() => cart.removeOneFromCart(product.id)}
                      >
                        -
                      </Button>
                    </Col>
                  </Form>
                  <Button
                    variant='danger'
                    className='my-2'
                    onClick={() => cart.deleteFromCart(product.id)}
                  >
                    Remove from Cart
                  </Button>
                </>
              ) : (
                <Button
                  variant='primary'
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
