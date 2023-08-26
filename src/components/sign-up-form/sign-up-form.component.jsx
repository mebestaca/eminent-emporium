import { useState, useContext } from "react";
import { 
    createUserAuthWithEmailAndPassword, 
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.style.scss";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const submitHandler = async (event) => {
        event.preventDefault();
        if (password!==confirmPassword) {
            alert("Passwords do not match!!!");
            return;
        }
        
        try {
            const { user } = await createUserAuthWithEmailAndPassword(email, password);
            createUserDocumentFromAuth(user, { displayName });
            setCurrentUser(user);
            resetFormFields();
        }
        catch(error){
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation encountered an error', error);
        }
        
    }
   
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const changeHandler = (event) => {
        const { name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>I do not have an account</h2>
            <span>Sign Up</span>
            <form onSubmit={ submitHandler }>
                <FormInput
                    label='Display Name'
                    inputOptions={{
                        required:true,
                        type:"text", 
                        name:"displayName", 
                        onChange:changeHandler,
                        value:displayName
                    }} 
                    />

                <FormInput
                    label='Email' 
                    inputOptions={{
                        required: true,
                        type:"email",
                        name:"email",
                        onChange:changeHandler,
                        value:email
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
                        value:password
                    }} 
                    />

                <FormInput
                    label='Confirm Password' 
                    inputOptions={{
                        required:true,
                        type:"password",
                        name:"confirmPassword",
                        minLength:6,
                        onChange:changeHandler,
                        value:confirmPassword
                    }}
                    />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;