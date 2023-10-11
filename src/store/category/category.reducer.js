import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES_INITIAL_STATE = {
  category: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.category = action.payload;
        }
    }

});

export const { setCategories } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;