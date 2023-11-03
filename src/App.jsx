import { useEffect, } from "react"
import {Routes, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from "./store/user/user.reducer"
import Home from './routes/home/home.component'
import NavigationBar from './components/navigation-bar/navigation-bar.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component' 
import Checkout from './routes/checkout/checkout.component'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      //Here we assign an anonymous function that returns an object with the destructured values that we want from the object. The function is immediately called, passing the user as parameter
      const pickedUser = user && (({accessToken, email}) => ({accessToken, email}))(user)
      dispatch(setCurrentUser(pickedUser))
    })
    return unsuscribe
  }, [])

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop/*' element={<Shop />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  )
}

export default App
