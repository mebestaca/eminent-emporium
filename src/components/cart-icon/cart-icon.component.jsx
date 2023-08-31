import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.style.scss';

const CartIcon = ({onClick}) => {

    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const cartItemsTotalQuantity = cartItems.reduce((accumulator, currentValue) =>  accumulator + currentValue.quantity, 0);

    const cartToggle = (event) => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container' onClick={cartToggle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{ cartItemsTotalQuantity }</span>
        </div>
    );
}

export default CartIcon;