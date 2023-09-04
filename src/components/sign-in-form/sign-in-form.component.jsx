import { useState } from "react";
import {
    signInEmailAndPassword,
    signInWithGooglePopUp
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './sign-in-form.style.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            await signInEmailAndPassword(email, password);
            resetFormFields();
        }
        catch(error) {
            switch(error ){
                case 'auth/user-not-found': alert('Cannot sign in, user not found'); break;
                case 'auth/wrong-password': alert('Cannot sign in, incorrect credentials'); break;
                default: console.log('User creation encountered an error', error);
            }
        }
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopUp();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value });
    }

    return (
      <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={submitHandler}>
            <FormInput
                label='Email' 
                inputOptions={{
                    required: true,
                    type:"email",
                    name:"email",
                    onChange:changeHandler,
                    value: email
                }}
                />

            <FormInput
                label='Password'
                inputOptions={{
                    required: true,
                    type:"password",
                    name:"password",
                    minLength:6,
                    onChange:changeHandler,
                    value: password
                }} 
                />
            
            <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type='button' onClick={logGoogleUser} buttonType={ BUTTON_TYPE_CLASSES.google }>
                    Google Sign In
                </Button>
            </div>
        </form>
      </div>  
    );
}

export default SignInForm;