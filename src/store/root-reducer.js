import { combineReducers } from "redux";
import { userReducer } from "../toolkit/user/user.reducer";
import { categoryReducer } from "../toolkit/category/category.reducer";
import { cartReducer } from "../toolkit/cart/cart.reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    category:categoryReducer,
    cart:cartReducer
});