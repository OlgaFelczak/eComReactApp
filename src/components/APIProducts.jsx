import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/productCard.css";

function ProductCard(props) {

  return (
    <Card className='card'>
      <Card.Img className='imgStyle' variant="top" src={props.src} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>       
  );
}

export default ProductCard;