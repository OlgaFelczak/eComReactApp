import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/productCard.css';
import { CartContext } from '../store/CartContext';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Col align="center">
      <Card className="card">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            className="imgStyle"
            variant="top"
            src={product.image_link}
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>£{product.price}</Card.Text>
          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {productQuantity}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.addOneToCart(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.removeOneFromCart(product.id)}
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => cart.deleteFromCart(product.id)}
              >
                Remove from Cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
