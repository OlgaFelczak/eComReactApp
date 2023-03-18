import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";     
import { productsArray } from "../productsStore";


function Store() {
    return (
    <>

     <h1 align="center">Welcome to our Store!</h1>
     <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
            {/* <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p> */}
            <ProductCard product={product}/>
           </Col>
        ))} 
     </Row>
    
    </>
    )
 }
 
 export default Store;  