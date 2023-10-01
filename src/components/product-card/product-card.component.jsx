import { ProductCardContainer, Footer, Name, Price } from "./product-card.style"; 
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { 
    // useSelector,
    useDispatch 
} from "react-redux"; 
// import { selectCartItems } from "../../store/cart/cart.selector";
// import { selectCartItems } from "../../store/toolkit/cart/cart.selector";
import { setAddCartItem } from "../../store/toolkit/cart/cart.reducer";
// import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    // const cartItems = useSelector(selectCartItems);
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