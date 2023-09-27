import { call, all, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInFailure, signInSuccess } from './user.action';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';

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

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}

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

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignIn),
    ]);
}