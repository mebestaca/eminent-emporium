import { ShoppingIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = ({onClick}) => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const cartToggle = (event) => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <ShoppingIconContainer onClick={cartToggle}>
            <ShoppingIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </ShoppingIconContainer>
    );
}

export default CartIcon;