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
    <div className='container product-page-container '>
      <div className='row content-container'>
        <div className='row'>
          <div className='col-sm-2'>
        <Button variant='primary' href='/store'>
                 Back
              </Button>
          </div>
        <div className='col-sm-10'>

        </div>
        <div className='row'>
          <div className='col-sm-4 image-container'>
          <img
             className='product-img'
             src={product.image_link}
             alt={product.name}
          />
          </div>
          <div className='col-sm-8'>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className='row'>
        <div className='row'>
              <span className='span-style'>£{product.price}</span>
             </div>
             <div className='add-crt-btn'>
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

        </div>
    </div>
      

  );
};

export default Product;
