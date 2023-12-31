import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>{
                cartItems.length ? cartItems.map((cartItem) => {
                    return <CartItem key={cartItem.id} cartItem={cartItem}/>
                }) :
                <EmptyMessage>Your cart is empty.</EmptyMessage>
            }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;