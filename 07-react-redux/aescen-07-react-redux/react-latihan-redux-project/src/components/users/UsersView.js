import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './UsersSlice'


function UsersView() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  useEffect(function () {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {users.isLoading ? <h1>Loading...</h1> : ''}
      {users.error !== '' ? <h1>{users.error}</h1> : ''}
      <ul style={{ textAlign: 'left' }}>
        {
          users.data.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UsersView
