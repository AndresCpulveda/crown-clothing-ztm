import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import {cartContext} from '../../contexts/cart.context'
import { signOutUser } from "../../utils/firebase/firebase.utils"

import CartIcon from "../cart-icon/cart-icon.component"

import { Navigation, LogoLink, LinksContainer, Link} from './navigation-bar.styles.js'
import CartDropDown from "../cart-drop-down/cart-drop-down.component"

const NavigationBar = () => {

  const {showingCart} = useContext(cartContext);
  const {currentUser} = useSelector(state => state.user);

  return (
    <>
      <Navigation>
        <LogoLink to='/'>
          <CrownLogo className='logo'>Logo</CrownLogo>
        </LogoLink>
        <LinksContainer>
          <Link to='/shop'>shop</Link>
          {currentUser ? <span className='nav-link' to='/' onClick={signOutUser}>sign out</span> : <Link className="nav-link" to='/auth'>sign in</Link>}
          <CartIcon />
        </LinksContainer>
        {showingCart ? <CartDropDown /> : null}
      </Navigation>
      <Outlet />
    </>
  )
}

export default NavigationBar
