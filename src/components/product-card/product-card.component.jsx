import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '../button/button.component'
import { FooterName, FooterPrice, ProductCardContainer, ProductFooter, ProductImage } from './product-card.styles.js';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const {name, price, imageUrl} = product;
  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </ProductFooter>
      <Button buttonType='inverted' onClick={() => dispatch(addItemToCart(cartItems, product))}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard