import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    signInEmailAndPassword
} from "../../utils/firebase/firebase.utils";

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
            const { user } = await signInEmailAndPassword(email, password);
            resetFormFields();
        }
        catch(error) {
            if (error.code === 'auth/user-not-found') {
                alert('Cannot sign in, user not found');
            }
            else if (error.code === 'auth/wrong-password') {
                alert('Cannot sign in, incorrect credentials')
            }
            console.log('User creation encountered an error', error);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value });
    }

    return (
      <div>
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
            
            <Button type='submit'>Sign In</Button>
            <Button buttonType={ 'google' }>Sign In With Google</Button>
        </form>
      </div>  
    );
}

export default SignInForm;