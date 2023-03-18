import React from 'react';
import { useLoaderData } from 'react-router';
import products from '../products.json';
import '../styles/product.css';

export async function loader({ params }) {
  return products.find((value) => value.id === parseInt(params.productId));
}

const Product = () => {
  const product = useLoaderData();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img
            className='product-img'
            src={product.image}
            alt={product.imageAlt}
          />
        </div>
        <div className='col-6'>
          <h3>{product.title}</h3>
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
