import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/productCard.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function APIProducts(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.id);

  return (
    <Card className='card'>
      <Link to={`/product/${props.id}`}>
        <Card.Img
          className='imgStyle'
          variant='top'
          src={props.src}
          alt={props.name}
        />
      </Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>£{props.price}</Card.Text>
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
                  onClick={() => cart.addOneToCart(props.id)}
                >
                  +
                </Button>
                <Button
                  sm='6'
                  className='mx-2'
                  onClick={() => cart.removeOneFromCart(props.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant='danger'
              className='my-2'
              onClick={() => cart.deleteFromCart(props.id)}
            >
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button variant='primary' onClick={() => cart.addOneToCart(props.id)}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default APIProducts;
