import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const submitHandler = (event) => {
        event.preventDefault();
        if (password!==confirmPassword) {
            alert("Passwords do not match!!!");
            return;
        }
        
        try {
            const response = createUserAuthWithEmailAndPassword(email, password);
        }
        catch(error){
            console.log(error);
        }
        
    }
   
    const changeHandler = (event) => {
        const { name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={ submitHandler }>
                <label>Name</label>
                <input 
                    required type="text" 
                    name="displayName" 
                    onChange={changeHandler} 
                    value={displayName}/>

                <label>Email</label>
                <input 
                    required type="email" 
                    name="email" 
                    onChange={changeHandler} 
                    value={email}/>

                <label>Password</label>
                <input 
                    required type="password" 
                    name="password" 
                    minLength={6}
                    onChange={changeHandler} 
                    value={password}/>

                <label>Confirm Password</label>
                <input 
                    required type="password" 
                    name="confirmPassword" 
                    minLength={6}
                    onChange={changeHandler} 
                    value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;