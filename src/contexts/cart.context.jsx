import { createContext, useState, useReducer, useEffect } from "react";

export const CART_ACTION_TYPES = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
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
        { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity } :
        cartItem
    );


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
    priceTotal: 0,
    removeItemFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
});    
    
export const CartProvider = ({ children }) => {
    const [{cartItems, isCartOpen, cartCount, priceTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [priceTotal, setPriceTotal] = useState(0);

    // useEffect(() =>{
    //     const cartTotalQuantity = cartItems.reduce((total, cartItem)=>  total + cartItem.quantity, 0);
    //     setCartCount(cartTotalQuantity);
    // }, [cartItems]);

    // useEffect(() =>{
    //     const cartTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    //     setPriceTotal(cartTotalPrice);
    // }, [cartItems]);

    const updateCartItemReducer = (newCartItems) => {
        const cartTotalQuantity = cartItems.reduce((total, cartItem)=>  total + cartItem.quantity, 0);
        const cartTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        dispatch({ 
            type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, 
            payload: {  
                cartItems: newCartItems,
                cartCount: cartTotalQuantity,
                priceTotal: cartTotalPrice,
            } 
        
        });
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

    const value = { 
        isCartOpen: true, 
        setIsCartOpen: ()=>{}, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        priceTotal,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}