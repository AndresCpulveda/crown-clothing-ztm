import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../contexts/cart.context";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalSpan } from './checkout.styles.js'

import CheckoutProduct from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  
  const {cartProducts, cartTotal} = useContext(cartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader>
      {cartProducts.map(product => <CheckoutProduct key={product.id} product={product} />)}
      <TotalSpan>Total: ${cartTotal}</TotalSpan>
    </CheckoutContainer>
  )
}

export default Checkout