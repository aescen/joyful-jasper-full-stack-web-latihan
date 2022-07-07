import { useSelector, useDispatch } from 'react-redux'
import { addTodo, putTodo, deleteTodo } from './TodosSlice'
import { useState } from 'react'
import NoteIcon from '@mui/icons-material/Note';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import List from './List';

function TodoView() {
  // redux
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.data)
  // states
  const [todo, setTodo] = useState('')

  // handlers
  const handleChange = (ev) => {
    setTodo(ev.target.value)
  }
  const handleClick = () => {
    if (todo.trim() !== '') {
      dispatch(addTodo({
        id: todos[todos.length - 1].id + 1,
        todo: todo.trim(),
      }))
      setTodo('')
    }
  }
  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
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
    <Container sx={{ p: '24px' }}>
      <h1>Todos</h1>
      <Container maxWidth='sm'>
        <TextField
          label='Add todo'
          variant='outlined'
          size='small'
          value={todo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          sx={{ margin: '0px 4px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NoteIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='outlined'
          size='large'
          sx={{ margin: '0px 4px' }}
          onClick={handleClick}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Container>
      <Container sx={{ textAlign: 'left' }}>
        {
          todos.map((item) => (
            <List
              todo={{ id: item.id, content: item.todo }}
              key={item.id}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          ))
        }
      </Container>
    </Container>
  )
}

export default TodoView
