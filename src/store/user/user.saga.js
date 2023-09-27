import { call, all, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { 
    signInFailure, 
    signInSuccess, 
    signOutFailure, 
    signOutSuccess, 
    signUpFailure, 
    signUpSuccess} from './user.action';
import { 
    getCurrentUser, 
    createUserDocumentFromAuth, 
    createUserAuthWithEmailAndPassword,
    signInWithGooglePopUp, 
    signInEmailAndPassword,
    signOutUser
} from '../../utils/firebase/firebase.utils';

//#region dispatches singInSuccess
export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}
//#endregion

//#region signInWithGoogle
export function* signInWithGoogle() {
    try{
        const { user } = yield call(signInWithGooglePopUp);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(
        USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}
//#endregion

//#region signInWithEmail
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignIn() {
    yield takeLatest(
        USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}
//#endregion

//#region sign up stage 1
export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createUserAuthWithEmailAndPassword, email, password);
        yield put(signUpSuccess, user, { displayName });
    }
    catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_UP_START,
        signUp
    );
}
//#endregion

//#region signup stage 2
export function* signUpAfterSuccess({ payload: { user, additionalDetails } }) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onSignUpSuccess() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        signUpAfterSuccess
    );
}
//#endregion

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    }
    catch(error) {
        yield put(signOutFailure(error));
    }
    
}

export function* onSignOutStart() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_OUT_START,
        signOut
    );
}

//#region checkuser entry point
export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(
        USER_ACTION_TYPES.CHECK_USER_SESSION,
        isUserAuthenticated
    );
}
//#endregion

//#region saga entry point listener
export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}
//#endregion