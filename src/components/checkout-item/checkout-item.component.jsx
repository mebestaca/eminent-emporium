import { 
    CheckoutItemContainer, 
    ImageContainer, 
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from "./checkout-item.style";
import { 
    useDispatch, 
    useSelector 
} from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, quantity, imageUrl } = cartItem;
    const onRemoveHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const onIncrementHandler = () => dispatch(increaseQuantity(cartItems, cartItem));
    const onDecrementHandler = () => dispatch(decreaseQuantity(cartItems, cartItem));

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