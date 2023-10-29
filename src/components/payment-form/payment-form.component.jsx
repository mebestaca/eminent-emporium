import { PaymentFormContainer, FormContainer, PaymentButton, CardNotice } from "./payment-form.styles";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";


const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const user = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {

        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then((res) => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user ? user.displayName : "Guest"
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        }
        else {
            if (paymentResult.paymentIntent.status === 'succeeded'){
                alert("Payment Successful");
            }
        }

    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardNotice>Notice: Use card number 4242 4242 4242 4242</CardNotice>
                <CardElement />
                <PaymentButton 
                    isLoading={isProcessingPayment} 
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                > 
                    Pay 
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;