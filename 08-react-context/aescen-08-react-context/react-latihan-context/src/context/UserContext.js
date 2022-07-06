import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user] = useState({
    name: 'Student',
    batch: 'Joyful Jasper'
  })

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = res.data
      console.log('res: ', res)
      console.log('data: ', data)
      setUserData(data)
    }

    getData()
  }, [])

  return (
    /* pass object of data to value */
    <UserContext.Provider value={{ user, userData }}>
      {/* or pass object directly */}
      {/* <UserContext.Provider value={ user }> */}
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
