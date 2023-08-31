import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={ imageUrl } alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;