import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const onRemoveHandler = () => removeItemFromCart(cartItem);
    const onIncrementHandler = () => increaseQuantity(cartItem);
    const onDecrementHandler = () => decreaseQuantity(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={onDecrementHandler}>
                    &#10094;
                </div>
                <span className="value">
                    { quantity }
                </span>
                <div className="arrow" onClick={onIncrementHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{ price }</span>
            <div className="remove-button" onClick={onRemoveHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;