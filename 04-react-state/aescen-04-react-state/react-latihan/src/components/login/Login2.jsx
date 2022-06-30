import { useState } from 'react'

function Login2() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const handleClick = () => {
    console.log(`${user.username}:${user.password}`)
  }
  const handleChangeInput = (ev) => {
    setUser((prevData) => ({
      ...prevData,
      [ev.target.name]: ev.target.value,
    }))
  }

  return (
    <div>
      <input
        placeholder='username'
        name='username'
        type='text'
        value={user.username}
        onChange={handleChangeInput}
      />
      <br />
      <input
        placeholder='password'
        name='password'
        type='password'
        value={user.password}
        onChange={handleChangeInput}
      />
      <br />
      <button onClick={handleClick} type='submit'>Login</button>
    </div>
  )
}

export default Login2