import { Link } from "react-router-dom"
import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar