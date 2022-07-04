import { Link } from 'react-router-dom'

export default function NavBar({ isLogin }) {
  const handleClick = () => {
    localStorage.setItem('isLogin', !isLogin)
  }
  return (
    <div>
      <Link to='/' className='App-link'>Home </Link>
      <Link to='profile' className='App-link'>Profile </Link>
      <Link to='register' className='App-link'>Register </Link>
      <Link to='login' className='App-link'>Login </Link>
      {
        (isLogin ? (
          <Link onClick={handleClick} reloadDocument={true} to='/' className='App-link'>
            Logout
          </Link>
        ) : '')
      }
    </div>
  )
}
