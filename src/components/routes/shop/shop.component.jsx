import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../../store/category/category.action';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoriesMap));
        };
        getCategories();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=":category" element={ <Category/> } />
        </Routes>
    );   
}

export default Shop;