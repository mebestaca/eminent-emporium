import './category-preview.style.scss';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title,products}) => {
    const max_previewed_item = 4;
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_,index) => index < max_previewed_item)
                        .map((product) =>
                        <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default CategoryPreview;