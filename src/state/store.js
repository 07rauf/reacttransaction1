import { configureStore } from '@reduxjs/toolkit'
import addReducer from './slices/addSlice'


export const store = configureStore({
  reducer: {
    add: addReducer,
  },
}) 