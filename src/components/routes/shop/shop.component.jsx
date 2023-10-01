import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { setCategories } from '../../../store/toolkit/category/category.reducer';
// import { fetchCategoriesStart } from '../../../store/category/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        };
      
        getCategoriesMap();
        // dispatch(fetchCategoriesStart());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=":category" element={ <Category/> } />
        </Routes>
    );   
}

export default Shop;