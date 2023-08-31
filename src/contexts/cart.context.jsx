import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
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
// const cartItemsTotalQuantity = cartItems.reduce((accumulator, currentValue) =>  accumulator + currentValue.quantity, 0);

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));

    useEffect(() =>{
        const cartTotalQuantity = cartItems.reduce((total, cartItem)=>  total + cartItem.quantity, 0);
        setCartCount(cartTotalQuantity);
    }, [cartItems]);

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}