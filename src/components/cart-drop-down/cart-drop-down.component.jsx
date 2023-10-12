import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component'
import { cartContext } from '../../contexts/cart.context';
import CartProduct from '../cart-product/cart-product.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.js';

const CartDropDown = () => {

  const {cartProducts} = useContext(cartContext);

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