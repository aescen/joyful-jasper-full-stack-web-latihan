import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isLogin={isLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="profile"
            element={isLogin ? <Profile /> : <Navigate to={"/register"} />}
          />
          <Route path='/register' element={<Register />} />
          <Route
            path='login'
            element={!isLogin ? <Login /> : <Navigate to='/profile' />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  )
}


export default App