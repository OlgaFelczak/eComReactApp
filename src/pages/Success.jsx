import { useEffect } from "react";

function Success() {
    
    useEffect(() => {
        JSON.parse(
          !window.localStorage.clear('products')
        );
    

      });

    return (
     <h1>Thanks for your purchase.</h1>
    )
 }
 
 export default Success;  