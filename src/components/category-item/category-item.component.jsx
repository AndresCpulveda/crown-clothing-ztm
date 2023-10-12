import { useNavigate } from 'react-router-dom'
import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from './category-item.styles';

const CategoryItem = ({category}) => {
  const {title, imageUrl, route} = category;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route)

  return (
    <CategoryItemContainer onClick={handleNavigate} >
      <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  )
}

export default CategoryItem