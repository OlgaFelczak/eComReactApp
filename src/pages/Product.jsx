import React from 'react';
import { useLoaderData } from 'react-router';
import '../styles/product.css';
import axios from 'axios';

export async function loader({ params }) {
  const { data: products } = await axios.get(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type='
  );
  return products.find((product) => product.id === parseInt(params.productId));
}

const Product = () => {
  const product = useLoaderData();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img
            className='product-img'
            src={product.image_link}
            alt={product.name}
          />
        </div>
        <div className='col-6'>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className='row'>
            <div className='col-6'>
              <span>{product.price}</span>
            </div>
            <div className='col-6'>
              <button type='button' className='btn btn-primary'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
