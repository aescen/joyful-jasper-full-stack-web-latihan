import { useState } from 'react'

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
    <div>
      <h1>Counter: <span data-testid='count'>{count}</span></h1>
      <br />
      <br />
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
