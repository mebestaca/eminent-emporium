import { Route, Routes } from 'react-router-dom';
import './shop.style.scss';
import CategoriesPreview from '../routes/categories-preview/categories-preview.component';

const Shop = () => {

    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
        </Routes>
    );   
}

export default Shop;