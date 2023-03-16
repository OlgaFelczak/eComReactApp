// import React from 'react'

// const ProductCard = () => {
//   return (
//     <div>ProductCard</div>
//   )
// }

// export default ProductCard

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>       
  );
}

export default ProductCard;