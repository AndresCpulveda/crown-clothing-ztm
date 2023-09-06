import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { cartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'

const CartIcon = () => {

  const {showingCart, setShowingCart, cartCount} = useContext(cartContext);

  return (
    <div className='cart-icon-container' onClick={() => {setShowingCart(!showingCart)}}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon