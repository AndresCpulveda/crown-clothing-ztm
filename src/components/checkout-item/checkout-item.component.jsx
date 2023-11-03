import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import './checkout-item.styles.js'
import { CheckoutItemArrow, CheckoutItemContainer, CheckoutItemImg, CheckoutItemName, CheckoutItemQuantity, CheckoutItemValue, ImageContainer } from "./checkout-item.styles.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action.js";


const CheckoutProduct = ({product}) => {
  const {price, imageUrl, name, quantity} = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleClearItem = () => dispatch(clearItemFromCart(cartItems, product))
  const handleAddItem = () => dispatch(addItemToCart(cartItems, product))
  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, product))

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