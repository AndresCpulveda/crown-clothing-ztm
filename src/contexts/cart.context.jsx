import { useState, createContext, useEffect, useReducer } from "react"

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

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        cartProducts: payload
      };
    case 'SET_SHOWING_CART':
      return {
        ...state,
        showingCart: payload
      };
    case 'SET_CART_COUNT':
      return {
        ...state,
        cartCount: payload
      };
    case 'SET_CART_TOTAL':
      return {
        ...state,
        cartTotal: payload
      }
    default: 
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

const INITIAL_STATE = {
  cartProducts: [],
  showingCart: false,
  cartCount: 0,
  cartTotal: 0
}

const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const {cartProducts, showingCart, cartCount, cartTotal} = state;

  const setCartProducts = (cartProducts) => {
    dispatch({type: 'SET_CART_PRODUCTS', payload: cartProducts})
  }
  
  const setShowingCart = (showingCart) => {
    dispatch({type: 'SET_SHOWING_CART', payload: showingCart})
  }
  const setCartCount = (count) => {
    dispatch({type: 'SET_CART_COUNT', payload: count})
  }
  
  const setCartTotal = (total) => {
    dispatch({type: 'SET_CART_TOTAL', payload: total})
  }

  
  // const [cartProducts, setCartProducts] = useState([])
  // const [showingCart, setShowingCart] = useState(false)
  // const [cartCount, setCartCount] = useState(0)
  // const [cartTotal, setCartTotal] = useState(0)
  
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