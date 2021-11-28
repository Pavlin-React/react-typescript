import { useState } from "react";

export let LoggedIn = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let handleLogin = () => {
    setIsLoggedIn(true);
  };
  let handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
