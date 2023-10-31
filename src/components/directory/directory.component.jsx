import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.style';

const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://raw.githubusercontent.com/mebestaca/assets-repo/main/eminent-emporium/category-preview/hats-preview.jpg",
      "route" : "shop/hats"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://raw.githubusercontent.com/mebestaca/assets-repo/main/eminent-emporium/category-preview/jackets-preview.jpg",
      "route": "shop/jackets"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://raw.githubusercontent.com/mebestaca/assets-repo/main/eminent-emporium/category-preview/shoes-preview.jpg",
      "route": "shop/sneakers"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://raw.githubusercontent.com/mebestaca/assets-repo/main/eminent-emporium/category-preview/women-preview.jpg",
      "route": "shop/womens"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://raw.githubusercontent.com/mebestaca/assets-repo/main/eminent-emporium/category-preview/mens-preview.jpg",
      "route": "shop/mens"
    }
  ];

const Directory = () => {
    return(
        <DirectoryContainer>
        {
            categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))
        }
        </DirectoryContainer>
    );
}

export default Directory;