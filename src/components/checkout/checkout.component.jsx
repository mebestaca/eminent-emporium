import { 
    CheckoutContainer, 
    CheckoutHeader, 
    CheckoutHeaderBlock, 
    Total 
} from './checkout.style';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../checkout-item/checkout-item.component';
import PaymentForm from '../payment-form/payment-form.component';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            { 
                cartItems.map((cartItem)=> <CheckoutItem key={cartItem.id} cartItem={cartItem} />) 
            }
            <Total>Total: ${ cartTotal }</Total>
            <PaymentForm/>
        </CheckoutContainer>
    );
}

export default Checkout;