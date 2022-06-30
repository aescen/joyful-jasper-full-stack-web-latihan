import React from 'react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ padding: '8px' }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter