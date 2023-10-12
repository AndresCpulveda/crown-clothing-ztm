import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { cartContext } from '../../contexts/cart.context';

import {CartIconContainer, ItemCount} from './cart-icon.styles.js'

const CartIcon = () => {

  const {showingCart, setShowingCart, cartCount} = useContext(cartContext);

  return (
    <CartIconContainer onClick={() => {setShowingCart(!showingCart)}}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon