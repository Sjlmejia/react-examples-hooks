import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext)
  const updateUser = () => {
    setUser({
      id: 1234,
      name: 'Jorge'
    });
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={updateUser}>
        Login
      </button>
    </div>
  )
}
