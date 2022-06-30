import axios from 'axios'

const API = ((BASE_URL = 'https://62bd2977bac21839b6fd61be.mockapi.io', END_POINT = 'todos') => ({
  GET: () => `${BASE_URL}/${END_POINT}`,
  POST: () => `${BASE_URL}/${END_POINT}`,
  PUT: (id) => `${BASE_URL}/${END_POINT}/${id}`,
  DELETE: (id) => `${BASE_URL}/${END_POINT}/${id}`,
}))();

const getTodos = async () => {
  const response = await axios.get(API.GET())
  return response
}

const postTodo = async (payload) => {
  const response = await axios.post(API.POST(), payload)
  return response
}

const putTodo = async (payload, id) => {
  const response = await axios.put(API.PUT(id), payload)
  return response
}

const deleteTodo = async (id) => {
  const response = await axios.delete(API.DELETE(id))
  return response
}

export {
  getTodos,
  postTodo,
  putTodo,
  deleteTodo,
}
