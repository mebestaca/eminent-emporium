import { 
    CheckoutItemContainer, 
    ImageContainer, 
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from "./checkout-item.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    
    const onRemoveHandler = () => removeItemFromCart(cartItem);
    const onIncrementHandler = () => increaseQuantity(cartItem);
    const onDecrementHandler = () => decreaseQuantity(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            
            <BaseSpan>{ name }</BaseSpan>
            <Quantity>
                <Arrow onClick={onDecrementHandler}>
                    &#10094;
                </Arrow>
                <Value>
                    { quantity }
                </Value>
                <Arrow onClick={onIncrementHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{ price }</BaseSpan>
            <RemoveButton onClick={onRemoveHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;