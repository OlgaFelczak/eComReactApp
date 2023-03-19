import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartItem(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id)

    return (
        <>
        <h3>{productData.name}</h3>
        <p>{quantity} total</p>
        <p>£{(quantity * productData.price).toFixed(2)}</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove from cart</Button>
        <hr></hr>

        </>
    )


}

export default CartItem;