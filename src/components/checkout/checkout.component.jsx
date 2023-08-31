import { Fragment, useContext } from 'react';
import CheckoutCard from '../checkout-card/checkout-card.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.style.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <Fragment>
            <div className='checkout-headers'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div className='checkout-items-cards'>
                {
                    cartItems.map((cartItem)=> 
                        <CheckoutCard key={cartItem.id} cartItem={cartItem} />
                    )
                }
            </div>
        </Fragment>
    );
}

export default Checkout;