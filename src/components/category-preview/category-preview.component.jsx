import { CategoryPreviewContainer, Title, Preview } from './category-preview.style';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title,products}) => {
    const max_previewed_item = 4;
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_,index) => index < max_previewed_item)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;