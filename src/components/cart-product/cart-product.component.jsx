import { CartProductContainer, ProductDetails } from './cart-product.styles';

const CartProduct = ({product}) => {
  const {imageUrl, name, price, quantity} = product;
  return (
    <CartProductContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductDetails>
        <span className='name'>{name}</span>
        <span className='price'>{`${quantity} x $${price}`}</span>
      </ProductDetails>
    </CartProductContainer>
  )
}

export default CartProduct