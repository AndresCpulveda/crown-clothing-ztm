import { createSlice } from '@reduxjs/toolkit'
import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const {cartItems, product} = action.payload;
      state.cartItems = addCartItem(cartItems, product)
    }
  }
})

export const {addItemToCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//   case CART_ACTION_TYPES.SET_CART_ITEMS:
//     return {
//       ...state,
//       cartItems: payload,
//     };
//   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//     return {
//       ...state,
//       isCartOpen: payload,
//     };
//   default:
//     return state;
//   }
// };