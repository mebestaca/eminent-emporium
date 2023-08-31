import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutCard = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    return (
        <div>
            <img src={imageUrl} alt={name} />
            <span>{ name }</span>
            <div>
                <button onClick={ ()=> decreaseQuantity(cartItem) }>-</button>
                <span>{ quantity }</span>
                <button onClick={ ()=> increaseQuantity(cartItem) }>+</button>
            </div>
            <span>{ price }</span>
            <button onClick= {() => removeItemFromCart(cartItem)} >Remove</button>
        </div>
    );
}

export default CheckoutCard;