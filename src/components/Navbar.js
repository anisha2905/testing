import React from 'react'
import { NavLink } from 'react-router-dom'
import './body.css';

const Navbar = () => {
  return (
    <div className='header'>
      <h1>Logo</h1>
      <ul >
      <NavLink to='/'className="spacing">Home</NavLink>
      <NavLink to='/about' className="spacing">About</NavLink>
      <NavLink to='/contact' className="spacing">Contact</NavLink>
      <NavLink to='/blog' className="spacing">Blogs</NavLink>  
      <NavLink to='/posts' className="spacing">Posts</NavLink>  
      </ul>    
    </div>
  )
}

export default Navbar