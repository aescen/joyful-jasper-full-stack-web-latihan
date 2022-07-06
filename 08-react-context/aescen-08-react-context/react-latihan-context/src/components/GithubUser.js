import { GithubUserContext } from '../context/GithubUserContext'

const GithubUser = () => (
  <GithubUserContext.Consumer>
    {(context) => {
      const { githubUser: user } = context

      return (
        <div>
          <h1>Github User</h1>
          <br />
          <img src={user.avatar_url} alt='avatar' width='100' height='100' />
          <p>{user.login}</p>
          <p>{user.name}</p>
        </div>
      )
    }}
  </GithubUserContext.Consumer>
)

export default GithubUser
