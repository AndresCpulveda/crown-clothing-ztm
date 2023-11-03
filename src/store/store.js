import { configureStore } from '@reduxjs/toolkit'
// import { logger } from 'redux-logger'
import { loggerMiddleware } from './middleware/logger'

import { rootReducer } from './root-reducer'

const middleWares = [loggerMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares)
})