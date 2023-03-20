import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";     
import { productsArray } from "../productsStore";
import { useState, useEffect } from 'react';
import axios from 'axios';
import APIProducts from '../components/APIProducts';

function Store() {
   const [apiProducts, setApiProducts] = useState([]);

    const fetchProducts = async () => {
        const responseApiProducts = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=');
        setApiProducts(responseApiProducts.data);
    }
    

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
    <>

     <h1 align="center">Welcome to our Store!</h1>
     <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
            <ProductCard product={product}/>
           </Col>
        ))}
     
         {apiProducts.map((product, idx) => (
            <Col align="center" key={idx}>
            <APIProducts
             id={product.id}
             key={product.id}
             name={product.name}
             src={product.image_link}
             price={product.price}
             description={product.description}
            />
           </Col>
        ))} 
      </Row>

    </>
    )
 }
 
 export default Store;  