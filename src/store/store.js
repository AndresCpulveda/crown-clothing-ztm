// In the store is where we set up the boilerplate for the connection between our redux global state and our components, also where we configure what goes in between that connection i. e the middlewares
import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { loggerMiddleware } from './middleware/logger'
// import { logger } from 'redux-logger'

import { rootReducer } from './root-reducer'

//Configuration for the persistence of state in local storage
/* 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
*/


//External middlewares configuration and set up
const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddleware].filter(Boolean)

//Configuration of the store, put together reducers and middlewares (default middlewares are selected and joined with imported middlewares)
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: true,
    }).concat(middleWares)
})

//Create the persistor of the store
/* export const persistor = persistStore(store) */