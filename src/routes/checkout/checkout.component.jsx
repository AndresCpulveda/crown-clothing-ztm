import { useSelector } from "react-redux";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalSpan } from './checkout.styles.js'

import CheckoutProduct from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(product => <CheckoutProduct key={product.id} product={product} />)}
      <TotalSpan>Total: ${cartTotal}</TotalSpan>
    </CheckoutContainer>
  )
}

export default Checkout