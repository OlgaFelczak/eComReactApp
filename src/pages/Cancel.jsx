import { useEffect } from "react";

function Cancel() {

   useEffect(() => {
      JSON.parse(
        !window.localStorage.clear('products')
      );
  

    });

   return (
    <h1>Sorry to see you cancelled your order.</h1>
   )
}

export default Cancel;  