import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import '../styles/productCard.css';
import '../styles/latestProducts.css';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    return await axios.get(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
    );
  };

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data.slice(0, 3));
    });
  }, []);

  return (
    <div className='container'>
      <h2>Latest Products</h2>
      <div className='row latest-products'>
        <Row xs={1} md={3} className='g-4'>
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LatestProducts;
