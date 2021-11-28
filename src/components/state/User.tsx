import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}


export let LoggedIn = () => {
  let [user, setUser] = useState<AuthUser | null>(null);

  let handleLogin = () => {
    setUser({
      name: 'Vishawas',
      email: 'viw@abv.bg'
    })
  };
  let handleLogout = () => {
    setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User name is{user?.name}</div>
      <div>User email is{user?.email}</div>
    </div>
  );
};
