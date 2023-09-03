import { Route, Routes } from 'react-router-dom';
import './shop.style.scss';
import Category from '../routes/category/category.component';
import CategoriesPreview from '../routes/categories-preview/categories-preview.component';

const Shop = () => {

    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=":category" element={ <Category/> } />
        </Routes>
    );   
}

export default Shop;