import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <Box>
      <h1>Counter: <span data-testid='count'>{count}</span></h1>
      <br />
      <br />
      <Box>
        <Button sx={{ mx: '8px' }} variant='contained' onClick={increment}>Increase</Button>
        <Button sx={{ mx: '8px' }} variant='contained' onClick={decrement}>Decrease</Button>
        <Button sx={{ mx: '8px' }} variant='contained' onClick={reset}>Reset</Button>
      </Box>
    </Box>
  )
}
