import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {CartIconContainer, ItemCount} from './cart-icon.styles.js'

const CartIcon = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }


  return (
    <CartIconContainer onClick={handleOpenCart}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon