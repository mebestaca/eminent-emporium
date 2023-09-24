import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
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

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_CART_ISOPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
} 

export const increaseQuantity = (cartItems, productToIncrease) => {
    const newCartItems = increaseCartItem(cartItems, productToIncrease);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const decreaseQuantity = (cartItems, productToDecrease) => {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}