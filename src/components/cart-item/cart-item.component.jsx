import './cart-item.style.jsx';
import { CartItemContainer, ItemDetailContainer } from './cart-item.style.jsx';

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={ imageUrl } alt={name} />
            <ItemDetailContainer>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity} x ${price}</span>
            </ItemDetailContainer>
        </CartItemContainer>
    );
}

export default CartItem;