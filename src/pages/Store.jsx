import { Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import '../styles/store.css';
import React from 'react';
import axios from 'axios';

function Store() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    return await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
    );
  };

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="store-title" align="center">
        Welcome to our Store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </Row>
    </>
  );
}

export default Store;
