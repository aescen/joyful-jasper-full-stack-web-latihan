import { configureStore } from '@reduxjs/toolkit'
import cakesReducer from '../components/cakes/CakesSlice'
import usersReducer from '../components/users/UsersSlice'
import todosReducer from '../components/todos/TodosSlice'

const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    users: usersReducer,
    todos: todosReducer,
  },
})

export default store
