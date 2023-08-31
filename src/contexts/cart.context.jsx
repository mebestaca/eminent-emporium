import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, productToRemove) => {
    const productExist = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (productExist) {
        return cartItems.filter((cartItem)=> 
            cartItem.id !== productToRemove.id
        );
    }
    return cartItems;
}

const increaseCartItem = (cartItems, productToIncrease) => {
    const productExist = cartItems.find((cartItem) => cartItem.id === productToIncrease.id);
    if (productExist) {
        return cartItems.map((cartItem)=> 
            (cartItem.id === productToIncrease.id) ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        );
    }
    return cartItems;
}

const decreaseCartItem = (cartItems, productToDecrease) => {
    const productExist = cartItems.find((cartItem) => cartItem.id === productToDecrease.id);
    if (productExist) {
        return cartItems.map((cartItem)=> 
            (cartItem.id === productToDecrease.id) ? 
            { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity } :
            cartItem
        );
    }
    return cartItems;
}

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));
    const removeItemFromCart = (productToRemove) => setCartItems(removeCartItem(cartItems, productToRemove));
    const increaseQuantity = (productToIncrease) => setCartItems(increaseCartItem(cartItems, productToIncrease));
    const decreaseQuantity = (productToDecrease) => setCartItems(decreaseCartItem(cartItems, productToDecrease));

    useEffect(() =>{
        const cartTotalQuantity = cartItems.reduce((total, cartItem)=>  total + cartItem.quantity, 0);
        setCartCount(cartTotalQuantity);
        const cartTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setPriceTotal(cartTotalPrice);
    }, [cartItems]);

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
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