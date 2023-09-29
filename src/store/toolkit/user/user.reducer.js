import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSilice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    }
});

export const { setCurrentUser } = userSilice.actions;

export const userReducer = userSilice.reducer;