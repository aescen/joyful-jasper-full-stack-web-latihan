import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
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
    const { username } = userData
    const { username: userStored } = JSON.parse(localStorage.getItem('userData'))
    if (username !== userStored) {
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('isLogin', false)
      // navigate('/profile');
      window.location.href = '../'
    } else {
      alert('username already exist!')
    }
  }

  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register
