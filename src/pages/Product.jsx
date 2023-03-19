import React from 'react';
import { useLoaderData } from 'react-router';
import products from '../products.json';
import '../styles/product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export async function loader({ params }) {
  return products.find((value) => value.id === parseInt(params.productId));
}

const Product = () => {
  const product = useLoaderData();

  const [apiProducts, setApiProducts] = useState([]);

  const fetchProducts = async () => {
      const responseApiProducts = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=');
      setApiProducts(responseApiProducts.data);
  }

  useEffect(() => {
      fetchProducts();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {/* <div className='col-6'>
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
        </div> */}
                    {
                        apiProducts.map(productsApi => {
                            return (
                                <ProductCard
                                    id={productsApi.id}
                                    key={productsApi.id}
                                    name={productsApi.brand}
                                    src={productsApi.image_link}
                                    price={productsApi.price}
                                    description={productsApi.description}
                                />
                            )
                        })
                    }
      </div>
    </div>
  );
};

export default Product;
