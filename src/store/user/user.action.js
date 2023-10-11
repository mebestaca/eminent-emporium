import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailure = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayedName) => 
    createAction(
        USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        {
            email, password, displayedName
        }
    );

export const signUpSuccess = (user, additionalInfo) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo });

export const signUpFailure = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailure = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);