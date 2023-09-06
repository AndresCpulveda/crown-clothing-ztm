import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { cartContext } from '../../contexts/cart.context';
import CartProduct from '../cart-product/cart-product.component';

const CartDropDown = () => {

  const {cartProducts} = useContext(cartContext);

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartProducts.map(product => <CartProduct key={product.id} product={product}/>)}
      </div>
      <Button onClick={goToCheckoutHandler} />
    </div>
  )
}

export default CartDropDown