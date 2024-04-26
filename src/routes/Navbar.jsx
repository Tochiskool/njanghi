import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">ABout</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/projects">Projects</Link>
    </>
  )
}

export default Navbar