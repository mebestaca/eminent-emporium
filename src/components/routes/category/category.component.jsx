import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CategoryContainer, CategoryTitle } from "./category.style";
import ProductCard from "../../product-card/product-card.component";
import { selectCategoriesMap } from "../../../store/toolkit/category/category.selector";
// import { selectCategoryMap, selectCategoryIsLoading } from "../../../store/category/category.selector";
// import Spinner from '../../spinner/spinner.component';

const Category = () =>{

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    // const isLoading = useSelector(selectCategoryIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                // isLoading ?
                // <Spinner/> :
                <CategoryContainer>
                {
                    products &&
                        products.map((product) => 
                            <ProductCard key={product.id} product={product} />
                        )
                }
                </CategoryContainer>
            }
        </Fragment>
    );
}

export default Category;