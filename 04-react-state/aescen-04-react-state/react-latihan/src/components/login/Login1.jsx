import { useState } from 'react'

function Login1() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (ev) => setUsername(ev.target.value)
  const handleChangePassword = (ev) => setPassword(ev.target.value)

  const handleClick = () => {
    console.log(`${username}:${password}`)
  }

  return (
    <div>
      <input
        placeholder='username'
        type='text'
        value={username}
        onChange={handleChangeUsername}
      />
      <br />
      <input
        placeholder='password'
        type='password'
        value={password}
        onChange={handleChangePassword}
      />
      <br />
      <button onClick={handleClick} type='submit'>Login</button>
    </div>
  )
}

export default Login1