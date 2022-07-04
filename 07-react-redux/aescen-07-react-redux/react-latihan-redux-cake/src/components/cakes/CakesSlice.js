import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cake: 99,
}

const cakesSlice = createSlice({
  name: 'cakes',
  initialState,
  reducers: {
    decrementCake: function (state) {
      state.cake -= 1
    },
    restockCake: function (state) {
      state.cake += 100
    },
  },
})

export default cakesSlice.reducer

export const { decrementCake, restockCake } = cakesSlice.actions
