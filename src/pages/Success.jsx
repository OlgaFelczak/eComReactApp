import { useEffect } from "react";
import { Button } from "react-bootstrap";

const Success = () => {
    
    useEffect(() => {
        JSON.parse(
          !window.localStorage.clear('products')
        );
    

      });

    return (
      <div>
     <h1>Thank You For Your Purchase.</h1>
     <p>Check your email for the receipt</p>
     <p>If you need any help with your purchase please <a href='mailto:contact@mj.com'>contact@mj.com</a></p>
     <Button href='/'>Continue Shopping</Button>
     </div>
    )
 }
 
 export default Success;  