import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    dropdownState: false,
    toggleDropdown: () => null,
});

export const CartDropdownContextProvider = ({ children }) => {
    const [dropdownState, toggleDropdown] = useState(false);
    const value = { dropdownState, toggleDropdown }

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>;
}