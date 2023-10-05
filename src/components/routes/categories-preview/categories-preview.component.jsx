import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../category-preview/category-preview.component"; 
import { selectCategoryMap, selectCategoryIsLoading } from "../../../store/category/category.selector";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoryMap);
    const isLoading = useSelector(selectCategoryIsLoading);
    return (
        <Fragment>
            {
                isLoading ?
                <Spinner /> :
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    );
                })
            }
        </Fragment>
    );   
}

export default CategoriesPreview;