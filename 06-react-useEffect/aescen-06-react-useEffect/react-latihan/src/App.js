import './App.css'
// import Counter from './components/Counter'
// import Login1 from './components/login/Login1'
// import Login2 from './components/login/Login2'
// import Todo from './components/todos/Todo'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [dataGithub, setDataGithub] = useState({
    name: 'my github name',
    avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    bio: 'my github bio',
  })

  useEffect(() => {
    const url = 'https://api.github.com/users/aescen'
    const getAPIData = async (url) => {
      const response = await axios.get(url)
      // console.log(response.data)
      setDataGithub({
        name: response.data.name !== null ? response.data.name : 'nama kosong',
        avatar: response.data.avatar_url,
        bio: response.data.bio !== null ? response.data.bio : 'bio kosong',
      });
    }

    getAPIData(url)

  }, [])



  // const [count, setCount] = useState(0)
  // const [changed, setChanged] = useState(0)

  // useEffect(() => {
  //   // use effect berjalan 2 kali, sebelum dan setelah render
  //   console.log('ada perubahan')
  //   setChanged(changed + 1)
  // }, [count])

  return (
    <div className="App">
      <div>
        {/* <h1>Use Effect</h1>
        <h1>Perubahan</h1>
        <p>{changed}</p>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button> */}

        <h1>Akun Github</h1>
        <img src={dataGithub.avatar} alt='avatar' width='128px' height='128px' />
        <h2>{dataGithub.name}</h2>
        <p>{dataGithub.bio}</p>
      </div>


      {/* <div>
        <h1>Counter</h1>
        <Counter />
        <br />
        <h1>Form 1</h1>
        <Login1 />
        <br />
        <h1>Form 2</h1>
        <Login2 />
        <br />
        <Todo />
      </div> */}
    </div>
  )
}

export default App
