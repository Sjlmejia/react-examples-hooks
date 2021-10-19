import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">UseContext</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active"  className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
      
    </nav>
  )
}
