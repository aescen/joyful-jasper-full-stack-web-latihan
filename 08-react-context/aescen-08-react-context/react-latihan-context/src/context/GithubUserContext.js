import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const GithubUserContext = createContext()

const GithubUserContextProvider = (props) => {
  const [githubUser, setGithubUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.github.com/users/aescen')
      const data = res.data
      console.log('res: ', res)
      console.log('data: ', data)
      setGithubUser(data)
    }

    getData()
  }, [])

  return (
    <GithubUserContext.Provider value={{ githubUser }}>
      {props.children}
    </GithubUserContext.Provider>
  )
}

export default GithubUserContextProvider
