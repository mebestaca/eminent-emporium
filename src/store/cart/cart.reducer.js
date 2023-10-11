import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        },
        setAddCartItem(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        setRemoveCartItem(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        setIncreaseCartItem(state, action) {
            state.cartItems = increaseCartItem(state.cartItems, action.payload);
        },
        setDecreaseCartItem(state, action) {
            state.cartItems = decreaseCartItem(state.cartItems, action.payload);
        }
    }
});

const addCartItem = (cartItems, productToAdd) => {
    console.log('current cart items:', cartItems);
    console.log('product to add:', productToAdd);
    const productExist = cartItems.find((cartItem)=> cartItem.id === productToAdd.id);
    if (productExist) {
        return cartItems.map((cartItem)=> 
            (cartItem.id === productToAdd.id) ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => 
    cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id);

const increaseCartItem = (cartItems, productToIncrease) =>  
    cartItems.map((cartItem)=> (
        cartItem.id === productToIncrease.id) ? 
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem
    );

const decreaseCartItem = (cartItems, productToDecrease) => 
    cartItems.map((cartItem)=> 
        (cartItem.id === productToDecrease.id) ? 
        { 
            ...cartItem, 
            quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity 
        } :
        cartItem
    );

export const cartReducer = cartSlice.reducer;

export const {
    setIsCartOpen,
    setAddCartItem,
    setRemoveCartItem,
    setIncreaseCartItem,
    setDecreaseCartItem
} = cartSlice.actions;