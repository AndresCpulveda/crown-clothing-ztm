import { useContext } from "react"
import { Outlet, NavLink } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { userContext } from "../../contexts/user.context"
import {cartContext} from '../../contexts/cart.context'
import { signOutUser } from "../../utils/firebase/firebase.utils"

import CartIcon from "../cart-icon/cart-icon.component"

import './navigation-bar.styles.scss'
import CartDropDown from "../cart-drop-down/cart-drop-down.component"

const NavigationBar = () => {

  const {showingCart} = useContext(cartContext);
  const {currentUser} = useContext(userContext);

  return (
    <>
      <div className="navigation">
        <NavLink className='logo-container' to='/'>
          <CrownLogo className='logo'>Logo</CrownLogo>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to='/shop'>shop</NavLink>
          {currentUser ? <span className='nav-link' to='/' onClick={signOutUser}>sign out</span> : <NavLink className="nav-link" to='/auth'>sign in</NavLink>}
          <CartIcon />
        </div>
        {showingCart ? <CartDropDown /> : null}
      </div>
      <Outlet />
    </>
  )
}

export default NavigationBar
