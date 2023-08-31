import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div>
            <span>{name}</span>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItem;