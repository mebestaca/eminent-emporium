import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                test
            </button>
        </div>
    );
}

export default SignIn;