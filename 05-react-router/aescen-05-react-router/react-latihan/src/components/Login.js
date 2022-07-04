import { useState } from 'react'
import { useNavigate, useHref } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  useHref()
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const handleChange = (ev) => {
    setUserData({
      ...userData,
      [ev.target.name]: ev.target.value,
    })
  }
  const handleSubmit = () => {
    const { username, password } = userData
    const { username: userStored, password: passStored } = JSON.parse(localStorage.getItem('userData'))
    if (username === userStored && password === passStored) {
      localStorage.setItem('isLogin', true)
      alert('Success')
      // navigate()
      window.location.href = '../'
    } else {
      alert('username / password is wrong!')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        name='username'
        type='text'
        value={userData.username}
        onChange={handleChange}
        placeholder='username' />
      <input
        name='password'
        type='password'
        value={userData.password}
        onChange={handleChange}
        placeholder='password' />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
