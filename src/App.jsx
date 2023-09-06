import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component'
import NavigationBar from './components/navigation-bar/navigation-bar.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component' 
import Checkout from './routes/checkout/checkout.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  )
}

export default App
