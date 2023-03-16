import React from 'react'
import ProductCard from './ProductCard'
import products from "../products.json"
// import items from "../items.json" 



const LatestProducts = (props) => {
  return (
    <div className='container'>
      <h2>Latest Products</h2>
      <div className='row'>
        <div className='col-sm-3'><ProductCard
        image={products[0].image}
        title={products[0].title}
        description={products[0].description}
        price={products[0].price}
        />
        </div>
        <div className='col-sm-3'><ProductCard
        image={products[1].image}
        title={products[1].title}
        description={products[1].description}
        price={products[1].price}
        /></div>
        <div className='col-sm-3'><ProductCard
        image={products[2].image}
        title={products[2].title}
        description={products[2].description}
        price={products[2].price}
        /></div>
        <div className='col-sm-3'><ProductCard
        image={products[3].image}
        title={products[3].title}
        description={products[3].description}
        price={products[3].price}
        />
        </div>
      </div>
    </div>

    
  )
}

export default LatestProducts;

