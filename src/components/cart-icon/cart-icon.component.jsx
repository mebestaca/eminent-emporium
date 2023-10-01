import { ShoppingIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/toolkit/cart/cart.reducer';
// import { setIsCartOpen } from '../../store/cart/cart.action';
// import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import { selectCartCount, selectIsCartOpen } from '../../store/toolkit/cart/cart.selector';

const CartIcon = ({onClick}) => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const cartToggle = (event) => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <ShoppingIconContainer onClick={cartToggle}>
            <ShoppingIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </ShoppingIconContainer>
    );
}

export default CartIcon;