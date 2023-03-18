import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/productCard.css";
import { CartContext } from './CartContext';
import { useContext } from 'react';

function ProductCard(props) {
  const product = props.product; 
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
 
  return (
    <Card className='card'>
      {/* <Card.Img className='imgStyle' variant="top" src={product.image} alt={product.imageAlt} /> */}
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
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