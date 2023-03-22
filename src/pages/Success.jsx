import React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Confetti } from '../utils/Confetti';
import "../styles/success.css";

const Success = () => {
  useEffect(() => {
    JSON.parse(!window.localStorage.clear('products'));
    Confetti();
  }, []);

  return (
    <div className='success-body'>
      <h1>Thank You For Your Purchase.</h1>
      <p>Check your email for the receipt</p>
      <p>
        If you need any help with your purchase please email us: {' '}
        <a href="mailto:contact@mj.com">contact@mj.com</a>
      </p>
      <Button href="/">Continue Shopping</Button>
    </div>
  );
};

export default Success;
