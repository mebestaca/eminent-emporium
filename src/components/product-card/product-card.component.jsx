import { ProductCardContainer, Footer, Name, Price } from "./product-card.style"; 
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux"; 
import { setAddCartItem } from "../../store/cart/cart.reducer";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price } = product;

    const addToCart = () =>  dispatch(setAddCartItem(product));

    return (
        <ProductCardContainer>
            <img src={ imageUrl } alt={ name }/>
            <Footer>
                <Name>{ name }</Name>
                <Price>{ price }</Price>
            </Footer>
            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={ addToCart }>Add to Cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;