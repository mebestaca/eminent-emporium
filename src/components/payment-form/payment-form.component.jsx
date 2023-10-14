import { CardElement, Elements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {

    const stripe = useStripe();
    const element = useElements();

    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || !Elements) {
            return;
        }

        
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay </Button>
            </FormContainer>
        </PaymentFormContainer>
    
    );
}

export default PaymentForm;