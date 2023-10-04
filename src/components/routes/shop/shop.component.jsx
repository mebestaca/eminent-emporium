import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { fetchCategoriesStart } from '../../../store/category/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategoriesStart());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=":category" element={ <Category/> } />
        </Routes>
    );   
}

export default Shop;