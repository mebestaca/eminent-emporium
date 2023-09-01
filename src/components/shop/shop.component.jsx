import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/category.context";
import ProductCard from "../product-card/product-card.component";
import './shop.style.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => 
                    <Fragment>
                        <h2>{ title }</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((category) => 
                                <ProductCard key={category.id} product={category} 
                            />)}
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );   
}

export default Shop;