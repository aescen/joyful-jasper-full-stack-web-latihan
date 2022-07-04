import { useSelector, useDispatch } from 'react-redux'
import { decrementCake, restockCake } from './CakesSlice'

function CakesView() {
  const dispatch = useDispatch()

  const cakes = useSelector((state) => state.cakes)

  return (
    <div>
      <h1>Cakes</h1>
      <p>Total: {cakes.cake}</p>
      <button onClick={() => dispatch(decrementCake())}>Take 1 cake</button>
      <button onClick={() => dispatch(restockCake())}>Add 100 cake</button>
    </div>
  )
}

export default CakesView
