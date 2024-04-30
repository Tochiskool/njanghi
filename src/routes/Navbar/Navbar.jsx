import React from 'react'
import { Link } from 'react-router-dom'
import "./Css/navstyle.css"
const Navbar = () => {
  return (
    <nav className='nav nav-primary'>
        <ul>
        <Link className="btn btn-nav" to="/njanghi">Home</Link>
        <Link className="btn btn-nav" to="/about">ABout</Link>
        <Link className="btn btn-nav" to="/contact">Contact</Link>
        <Link className="btn btn-nav" to="/projects">Projects</Link>
        </ul>
    </nav>
  )
}

export default Navbar