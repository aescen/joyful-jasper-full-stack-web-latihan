import { useState } from 'react'
import List from './List'

function Todo() {
  const [todos, setTodos] = useState(['belajar react', 'beajar state'])
  const [todo, setTodo] = useState('')


  const handleChange = (ev) => {
    setTodo(ev.target.value)
  }

  const handleClick = () => {
    setTodos([...todos, todo])
    setTodo('')
  }

  const handleDelete = (key) => {
    const newTodos = todos.filter((_, idx) => idx !== key)
    setTodos(newTodos)
  }

  const handleEdit = (key) => {
    const newTodo = prompt(`Edit todo ${key + 1}`)
    const newTodos = todos.map((item, idx) => ((idx === key) ? newTodo : item))
    setTodos(newTodos)
  }
  return (
    <div>
      <h1>Todo</h1>
      <br />
      <input
        placeholder='todo'
        name='todo'
        type='text'
        value={todo}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      <br />
      <div style={{ textAlign: 'left' }}>
        {
          todos.map((item, idx) => (
            <List
              todo={item}
              key={idx}
              handleEdit={() => handleEdit(idx)}
              handleDelete={() => handleDelete(idx)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Todo