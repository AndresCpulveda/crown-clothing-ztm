import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
