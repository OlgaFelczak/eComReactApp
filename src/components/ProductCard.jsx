// import React from 'react'

// const ProductCard = () => {
//   return (
//     <div>ProductCard</div>
//   )
// }

// export default ProductCard

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/productCard.css";

function ProductCard(props) {
  return (
    <Card className='card'>
      <Card.Img className='imgStyle' variant="top" src={props.image} alt={props.imageAlt} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>       
  );
}

export default ProductCard;