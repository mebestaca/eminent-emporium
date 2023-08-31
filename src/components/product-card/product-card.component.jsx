import Button from "../button/button.component";
import './product-card.style.scss';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {

    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addToCart = () => addItemToCart(product);

    return (<div className="product-card-container">
        <img src={ imageUrl } alt={ name }/>
        <div className="footer">
            <span>{ name }</span>
            <span>{ price }</span>
        </div>
        <Button buttonType='inverted' onClick={ addToCart }>Add to Cart</Button>
    </div>);
}

export default ProductCard;