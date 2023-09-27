import { call, all, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInFailure, signInSuccess } from './user.action';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopUp, signInEmailAndPassword } from '../../utils/firebase/firebase.utils';

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

//#region googleSignIn
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

//#region 
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch(error) {

    }
}

export function* onEmailSignIn() {
    yield takeLatest(
        USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}
//#endregion

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
    ]);
}
//#endregion