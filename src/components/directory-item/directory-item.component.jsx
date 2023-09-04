import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.style";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageUrl:src, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    }

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage src={src}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;