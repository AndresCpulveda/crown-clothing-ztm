import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Button from '../button/button.component'
import CartProduct from '../cart-product/cart-product.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.js';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropDown = () => {

  const cartProducts = useSelector(selectCartItems)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartProducts.length ? (cartProducts.map(product => <CartProduct key={product.id} product={product}/>)) : (<span className='empty-message'>Your cart is empty</span>)}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown