// import React from 'react'
import Button from 'react-bootstrap/Button';
import "../styles/jumbotron.css";

const HomeJumbotron = () => {
  return (
    <div className='jumbotronContainer'>
  <h1>Welcome to our store</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style <br />component for calling
    extra attention to featured<br /> content or information.
  </p>
  <p>
    <Button bsStyle="primary" className='jumbotronBtn'>Shop now</Button>
  </p>
</div>
  )
}

export default HomeJumbotron