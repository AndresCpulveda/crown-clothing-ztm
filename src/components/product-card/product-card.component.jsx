import { useContext } from 'react';

import Button from '../button/button.component'
import { cartContext } from '../../contexts/cart.context';
import { FooterName, FooterPrice, ProductCardContainer, ProductFooter, ProductImage } from './product-card.styles.js';

const ProductCard = ({product}) => {

  const {addToCart} = useContext(cartContext);

  const {name, price, imageUrl} = product;
  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </ProductFooter>
      <Button buttonType='inverted' onClick={() => {addToCart(product)}}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard