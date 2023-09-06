import './cart-product.styles.scss'

const CartProduct = ({product}) => {
  const {imageUrl, name, price, quantity} = product;
  return (
    <div className='cart-product-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='product-details'>
        <span className='name'>{name}</span>
        <span className='price'>{`${quantity} x $${price}`}</span>
      </div>
    </div>
  )
}

export default CartProduct