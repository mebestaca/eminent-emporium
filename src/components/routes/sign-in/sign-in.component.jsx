// import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
    /*
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }
    */

    return (
        <SignUpForm/>
    );
}

export default SignIn;