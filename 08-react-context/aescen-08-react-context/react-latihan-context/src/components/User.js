import { UserContext } from '../context/UserContext'

const User = () => (
  <UserContext.Consumer>
    {(context) => {
      /* if passaing object of data then destructure value */
      /* otherwise use data directly */
      const { user } = context

      return (
        <div>
          <h1>Halaman User</h1>
          <p>{user.name}</p>
          <p>{user.batch}</p>
        </div>
      )
    }}
  </UserContext.Consumer>
)

export default User
