import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
        <Link className="btn btn-nav" to="/njanghi">Home</Link>
        <Link className="btn btn-nav" to="/about">ABout</Link>
        <Link className="btn btn-nav" to="/contact">Contact</Link>
        <Link className="btn btn-nav btn-primary" to="/projects">Projects</Link>
        </ul>
    </nav>
  )
}

export default Navbar