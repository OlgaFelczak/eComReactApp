import React from 'react'
import ProductCard from './ProductCard'
import products from "../products.json"
// import items from "../items.json" 



const LatestProducts = (props) => {
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
        <div className='col-sm'><ProductCard
        image={products[1].image}
        title={products[1].title}
        description={products[1].description}
        price={products[1].description}
        /></div>
        <div className='col-sm'><ProductCard
        image={products[1].image}
        title={products[1].title}
        description={products[1].description}
        price={products[1].description}
        /></div>
      </div>
    </div>

    
  )
}

export default LatestProducts;

