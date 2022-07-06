import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
  isLoading: false,
  data: [],
  error: '',
}

/* nama pertama path di typePrefix samakan saja dengan nama state */
/* ini dipakai untuk membuat konstanta `type` pada action */
/* contoh: */
/* users/fetchUsers/pending */
/* users/fetchUsers/fulfilled */
/* users/fetchUsers/rejected */
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => (
  /* return response data dengan axios */
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
))

const usersSlice = createSlice({
  /* nama state */
  name: 'users',
  /* data state awal */
  initialState,
  /* untuk bentuk fungsi pakai extraReducer*/
  extraReducers: function (reducer) {
    /* saat pending / masih proses */
    reducer.addCase(fetchUsers.pending, function (state) {
      state.isLoading = true
    })
    /* saat selesai */
    reducer.addCase(fetchUsers.fulfilled, function (state, action) {
      state.isLoading = false
      /* data yang didapatkan dari fetchUsers berada pada properti `payload` */
      state.data = action.payload
    })
    /* saat gagal*/
    reducer.addCase(fetchUsers.rejected, function (state, action) {
      state.isLoading = false
      // state.users = []
      state.error = action.error
    })
  },
})

export default usersSlice.reducer

// export const { decrementCake, restockCake } = usersSlice.actions
