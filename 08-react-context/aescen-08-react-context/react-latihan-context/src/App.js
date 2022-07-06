import './App.css'
import ContextProviders from './context/ContextProviders'

import User from './components/User'
import Users from './components/Users'
import UserContextProvider from './context/UserContext'

import GithubUser from './components/GithubUser'
import GithubUsers from './components/GithubUsers'
import GithubUserContextProvider from './context/GithubUserContext'

function App() {
  return (
    <div className="App">
      <ContextProviders providers={[
        <UserContextProvider />,
        <GithubUserContextProvider />
      ]}>
        <p>Using ContextProviders helper</p>
        <User />
        <Users />
        <GithubUser />
        <GithubUsers />
      </ContextProviders>

      {/* <UserContextProvider>
        <GithubUserContextProvider>
          <p>here you can access all context data from ancestor providers</p>
          <User />
          <Users />
          <GithubUser />
          <GithubUsers />
        </GithubUserContextProvider>
      </UserContextProvider> */}

      {/* <UserContextProvider>
        <User />
        <Users />
      </UserContextProvider>
      <GithubUserContextProvider>
        <p>here you cannot access UserContext context data and vice versa</p>
        <GithubUser />
        <GithubUsers />
      </GithubUserContextProvider> */}
    </div>
  )
}

export default App
