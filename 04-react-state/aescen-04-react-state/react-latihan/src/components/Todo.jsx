import { useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState(['belajar react', 'beajar state'])
  const [todo, setTodo] = useState('')

  const handleInput = (ev) => {
    setTodo(ev.target.value);
  }

  const handleClick = () => {
    setTodos([...todos, todo])
    setTodo('');
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
        onChange={handleInput}
      />
      <button onClick={handleClick}>Add</button>
      <br />
      <ul style={{ textAlign: 'left' }}>
        {
          todos.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default Todo