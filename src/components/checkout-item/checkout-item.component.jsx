import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import './checkout-item.styles.js'
import { CheckoutItemArrow, CheckoutItemContainer, CheckoutItemImg, CheckoutItemName, CheckoutItemQuantity, CheckoutItemValue, ImageContainer } from "./checkout-item.styles.js";


const CheckoutProduct = ({product}) => {
  const {price, imageUrl, name, quantity} = product;

  const {cartProducts, addToCart, clearFromCart, removeFromCart} = useContext(cartContext);

  const handleClearItem = () => clearFromCart(product, cartProducts)
  const handleAddItem = () => addToCart(product)
  const handleRemoveItem = () => removeFromCart(product)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImg src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow>
          <span onClick={handleRemoveItem}>&#10094;</span>
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow>
          <span onClick={handleAddItem}>&#10095;</span>
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>&#10005;</div>
    </CheckoutItemContainer>
  )
}

export default CheckoutProduct