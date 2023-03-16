import React from 'react'
import ProductCard from './ProductCard'
import products from "../products.json"

const LatestProducts = () => {
  return (
    <div className='container'>
      <h2>Latest Products</h2>
      <div className='row'>
        <div className='col-sm'><ProductCard
        image={products[0].image}
        title={products[0].title}
        description={products[0].description}
        price={products[0].description}
        /></div>
        <div className='col-sm'><ProductCard /></div>
        <div className='col-sm'><ProductCard /></div>
      </div>
    </div>
  )
}

export default LatestProducts