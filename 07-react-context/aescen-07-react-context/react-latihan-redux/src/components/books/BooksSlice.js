import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalBooks: 100,
  totalAuthors: 48,
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  // reducers
  reducers: {
    // actionName: actionFunc
    borrow: function (state) {
      state.totalBooks -= 1
    },
  },
})

export default bookSlice.reducer

export const { borrow } = bookSlice.actions
