import { useSelector, useDispatch } from 'react-redux'
import { addTodo, putTodo, deleteTodo } from './TodosSlice'
import { useState } from 'react'
import List from './List';

function TodoView() {
  // redux
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.data)
  // states
  const [todo, setTodo] = useState('')
  // handlers
  const handleChange = (ev) => setTodo(ev.target.value)
  const handleClick = () => {
    dispatch(addTodo({
      id: todos[todos.length - 1].id + 1,
      todo,
    }))
    setTodo('')
    console.log(todo)
  }
  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      handleClick();
    }
  };
  const handleEdit = (id) => {
    const editedTodo = prompt(`Edit todo ${id}`)
    dispatch(putTodo({
      id,
      todo: editedTodo,
    }))
  }
  const handleDelete = (id) => {
    dispatch(deleteTodo({
      id,
      todo,
    }))
  }

  return (
    <div>
      <h1>Todos</h1>
      <input
        placeholder='a new todo'
        type='text'
        value={todo}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={{ margin: '4px 4px 24px 4px', padding: '4px 8px' }}
      />
      <button
        style={{ margin: '4px', padding: '4px 8px' }}
        onClick={handleClick}
      >
        Add
      </button>
      <div style={{ textAlign: 'left' }}>
        {
          todos.map((item) => (
            <List
              todo={item.todo}
              key={item.id}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodoView
