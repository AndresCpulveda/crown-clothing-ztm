/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react"

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

//as the actual value you want to access
export const userContext = createContext({
  currenUser: null,
  setCurrentUser: () => null,
})

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const {type, payload} = action;

  switch(type) {
  case 'SET_CURRENT_USER':
    return {
      ...state,
      currentUser: payload,
    };
  default:
    throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {currentUser} = state;
  console.log(currentUser);

  const setCurrentUser = (user) => {
    console.log(user);
    dispatch({type: 'SET_CURRENT_USER', payload: user})
  }

  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsuscribe
  }, [])

  return ( 
    <userContext.Provider
      value={value}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider