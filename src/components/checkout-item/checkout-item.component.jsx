import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss'


const CheckoutProduct = ({product}) => {
  const {price, imageUrl, name, quantity} = product;

  const {cartProducts, addToCart, clearFromCart, removeFromCart} = useContext(cartContext);

  const handleClearItem = () => clearFromCart(product, cartProducts)
  const handleAddItem = () => addToCart(product)
  const handleRemoveItem = () => removeFromCart(product)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={handleRemoveItem}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">
          <span onClick={handleAddItem}>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>&#10005;</div>
    </div>
  )
}

export default CheckoutProduct