import { ShoppingIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';

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