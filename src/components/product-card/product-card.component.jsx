import { useContext } from 'react';

import './product-card.styles.scss'

import Button from '../button/button.component'
import { cartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {

  const {addToCart} = useContext(cartContext);

  const {name, price, imageUrl} = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => {addToCart(product)}}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard