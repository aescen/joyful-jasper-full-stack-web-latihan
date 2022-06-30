import './App.css'
import Counter from './components/Counter'
import Login1 from './components/login/Login1'
import Login2 from './components/login/Login2'
import Todo from './components/todos/Todo'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <Counter />
        <br />
        <h1>Form 1</h1>
        <Login1 />
        <br />
        <h1>Form 2</h1>
        <Login2 />
        <br />
        <Todo />
      </div>
    </div>
  )
}

export default App
