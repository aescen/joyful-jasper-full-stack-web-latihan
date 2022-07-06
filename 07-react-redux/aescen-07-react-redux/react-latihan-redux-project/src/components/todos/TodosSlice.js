import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    { id: 0, todo: 'hello' },
    { id: 1, todo: 'belajar' },
    { id: 2, todo: 'test' },
    { id: 3, todo: 'yeahh' },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: function (state, action) {
      state.data.push(action.payload)
    },
    putTodo: function (state, action) {
      const newData = state.data.map((item, idx) => {
        if (item.id === action.payload.id) {
          item.todo = action.payload.todo
        }
        return item
      })
      state.data = newData
    },
    deleteTodo: function (state, action) {
      const newTodo = state.data
        .filter((item) => (item.id !== action.payload.id))
      state.data = newTodo
    }
  }
})

export default todosSlice.reducer

export const { addTodo, putTodo, deleteTodo } = todosSlice.actions
