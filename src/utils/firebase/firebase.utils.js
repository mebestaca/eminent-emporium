import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

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

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
   
    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth;
        const dateCreated = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                dateCreated,
            });
        }
        catch(err) {
            console.log('An error ocurred while trying to create a user');
        }
    }
    return userDocRef;
}