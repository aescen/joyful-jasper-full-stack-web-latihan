import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const User = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>Halaman Users (useContext)</h1>
      <p>{user.name}</p>
      <p>{user.batch}</p>
    </div>
  )
}

export default User
