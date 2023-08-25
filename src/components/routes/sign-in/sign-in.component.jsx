// import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const SignIn = () => {
    /*
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }
    */

    return (
        <div>
            <SignInForm />
            <SignUpForm/>
        </div>
    );
}

export default SignIn;