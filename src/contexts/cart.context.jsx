import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CART_ACTION_TYPES = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
    TOGGLE_CART_CARD: 'TOGGLE_CART_CARD',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems:[],
    cartCount: 0,
    priceTotal: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS: 
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.TOGGLE_CART_CARD:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in cart reducer`);
    }

}

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


export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    priceTotal: 0,
    setIsCartOpen: () => null,
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
});    
    
export const CartProvider = ({ children }) => {
    const [{cartItems, isCartOpen, cartCount, priceTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemReducer = (newCartItems) => {
        const cartTotalQuantity = cartItems.reduce((total, cartItem)=>  total + cartItem.quantity, 0);
        const cartTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        dispatch(
            createAction(
                CART_ACTION_TYPES.UPDATE_CART_ITEMS, 
                {  
                    cartItems: newCartItems,
                    cartCount: cartTotalQuantity,
                    priceTotal: cartTotalPrice,
                } 
            )
        );
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
    } 

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemReducer(newCartItems);
    } 

    const increaseQuantity = (productToIncrease) => {
        const newCartItems = increaseCartItem(cartItems, productToIncrease);
        updateCartItemReducer(newCartItems);
    }

    const decreaseQuantity = (productToDecrease) => {
        const newCartItems = decreaseCartItem(cartItems, productToDecrease);
        updateCartItemReducer(newCartItems);
    }

    const toggleCartCard = (toggle) =>{
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_CARD, toggle));
    }

    const value = { 
        isCartOpen, 
        priceTotal,
        cartItems, 
        cartCount, 
        setIsCartOpen: toggleCartCard, 
        addItemToCart, 
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}