// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from '../shop-data';
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategories] = useState({});
    /*
    useEffect(()=>{
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
    */
    useEffect(()=>{
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategories(categoriesMap);
        };
        getCategories();
    }, []);
    
    const value = { categoriesMap };

    return <CategoriesContext.Provider value={ value }> { children } </CategoriesContext.Provider>
}