import { useEffect, } from "react"
import {Routes, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from './store/user/user.action'
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
      dispatch(setCurrentUser(user))
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
