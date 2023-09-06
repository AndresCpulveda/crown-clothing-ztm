import { useState, createContext, useEffect } from "react"

const addCartItem = (productToAdd, productsList) => {
  const existingProduct = productsList.find(item => item.id === productToAdd.id)

  if(existingProduct) {
    return productsList.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
  }

  return [...productsList, {...productToAdd, quantity: 1}]
}

const removeCartItem = (productToRemove, productsList) => {
  if(productToRemove.quantity === 1) {
    const  filteredList = productsList.filter(item => item.id !== productToRemove.id)
    return filteredList
  }
  const newList = productsList.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item)
  return newList
}

const clearCartItem = (productToClear, productsList) => {
  const  filteredList = productsList.filter(item => item.id !== productToClear.id)
  return filteredList
}

export const cartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
})

const CartProvider = ({children}) => {
  
  const [cartProducts, setCartProducts] = useState([])
  const [showingCart, setShowingCart] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  
  const addToCart = (product) => {
    setCartProducts(addCartItem(product, cartProducts))
  }

  const clearFromCart = (productToClear) => {
    setCartProducts(clearCartItem(productToClear, cartProducts))
  }
  
  const removeFromCart = (product) => {
    setCartProducts(removeCartItem(product, cartProducts))
  }

  const value = {
    cartProducts,
    setCartProducts,
    showingCart,
    setShowingCart,
    addToCart,
    cartCount,
    setCartCount,
    clearFromCart,
    removeFromCart,
    cartTotal
  }
  
  useEffect(() => {
    const newCartCount = cartProducts.reduce((acc, cur) => acc + cur.quantity, 0)
    setCartCount(newCartCount)
  }, [cartProducts])

  useEffect(() => {
    const total = cartProducts.reduce((acc, cur) => acc = acc + cur.quantity * cur.price, 0)
    setCartTotal(total)
  }, [cartProducts])

  return ( 
    <cartContext.Provider
      value={value}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider