import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../shop-data';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    /*
    useEffect(()=>{
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
    */
    /*
    useEffect(()=>{
        const getData = async () => {
            const map = await getCategoriesAndDocuments();
            console.log(map);
        };
        getData();
    }, []);
    */
    const value = { products };

    return <ProductsContext.Provider value={ value }> { children } </ProductsContext.Provider>
}