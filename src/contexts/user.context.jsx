import { useState, createContext, useEffect } from "react"

import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils"

//as the actual value you want to access
export const userContext = createContext({
  currenUser: null,
  setCurrentUser: () => null,
})

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
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