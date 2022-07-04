import { useState, useEffect } from 'react'
import * as API from '../api.js'
import List from './List'

function Todo() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [apiAction, setApiAction] = useState({ id: '', payload: {}, action: 'get_all' })

  const handleChange = (ev) => {
    setTodo(ev.target.value)
  }

  const handleClick = () => {
    setApiAction({
      payload: { todo },
      action: 'add',
    })
    setTodo('')
  }

  const handleDelete = (id) => {
    const toDeleteTodo = todos.filter((item) => item.id === id)
    setApiAction({
      id,
      payload: { todo: toDeleteTodo },
      action: 'delete',
    })
  }

  const handleEdit = (id) => {
    const editedTodo = prompt(`Edit todo ${id}`)
    setApiAction({
      id,
      payload: { todo: editedTodo },
      action: 'edit',
    })
  }

  useEffect(() => {
    const checkApiAction = async () => {
      if (apiAction.action === 'add') {
        const addedTodo = (await API.postTodo(apiAction.payload)).data
        setTodos([...todos, addedTodo])
      }
      if (apiAction.action === 'delete') {
        const deletedTodo = (await API.deleteTodo(apiAction.id)).data
        const filteredTodos = todos.filter((item) => item.id !== deletedTodo.id)
        setTodos(filteredTodos)
      }
      if (apiAction.action === 'edit') {
        const editedTodo = (await API.putTodo(apiAction.payload, apiAction.id)).data
        const editedTodos = todos.map((item) => ((item.id === editedTodo.id) ? editedTodo : item))
        setTodos(editedTodos)
      }
      if (apiAction.action === 'get_all') {
        setTodos((await API.getTodos()).data);
      }
    }

    checkApiAction();
  }, [apiAction])


  return (
    <div>
      <input
        placeholder='todo'
        name='todo'
        type='text'
        value={todo}
        onChange={handleChange}
        style={{ margin: '4px 4px 24px 4px', padding: '4px 8px' }}
      />
      <button style={{ margin: '4px', padding: '4px 8px' }} onClick={handleClick}>Add</button>
      <br />
      <div>
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

export default Todo