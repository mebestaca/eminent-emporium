import { initializeApp } from "firebase/app";
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3iWHLyIEHF8wwwukfZtP2yhMfWVzhjDk",
    authDomain: "eminent-emporium-db.firebaseapp.com",
    projectId: "eminent-emporium-db",
    storageBucket: "eminent-emporium-db.appspot.com",
    messagingSenderId: "96158046521",
    appId: "1:96158046521:web:a5645f33a2599e9fe9f0e8"
};

const app = initializeApp(firebaseConfig);  

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);