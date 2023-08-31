import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
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

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}