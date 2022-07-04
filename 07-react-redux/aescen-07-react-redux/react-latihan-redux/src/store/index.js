import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../components/books/BooksSlice'

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
})

export default store