import { ProductCardContainer, Footer, Name, Price } from "./product-card.style"; 
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {

    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addToCart = () => addItemToCart(product);

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