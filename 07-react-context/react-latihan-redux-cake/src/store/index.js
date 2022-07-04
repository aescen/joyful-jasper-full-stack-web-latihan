import { configureStore } from '@reduxjs/toolkit'
import cakesReducer from '../components/cakes/CakesSlice'

const store = configureStore({
  reducer: {
    cakes: cakesReducer,
  },
})

export default store
