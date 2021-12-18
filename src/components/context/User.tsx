import { useContext } from 'react';
import { UserContext } from './UserContext';

export let User = () => {

  let userContext = useContext(UserContext)

  let handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'Vishwas',
        email: 'vishwas@example.com',
      })
    }
  }
  let handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }
  return(
    <div>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout} >Logout</button>
      <div>User name is{userContext?.user?.name}</div>
      <div>User name is{userContext?.user?.email}</div>
    </div>
  )

};