import { useContext } from 'react'
import { GithubUserContext } from '../context/GithubUserContext'

const GithubUsers = () => {
  const { githubUser: user } = useContext(GithubUserContext)

  return (
    <div>
      <h1>Github Users (useContext)</h1>
      <br />
      <img src={user.avatar_url} alt='avatar' width='100' height='100' />
      <p>{user.login}</p>
      <p>{user.name}</p>
    </div>
  )
}

export default GithubUsers
