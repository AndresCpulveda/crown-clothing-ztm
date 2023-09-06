import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../contexts/cart.context";

import './checkout.styles.scss'

import CheckoutProduct from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  
  const {cartProducts, cartTotal} = useContext(cartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      {cartProducts.map(product => <CheckoutProduct key={product.id} product={product} />)}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout