import React from 'react'
import './NavBar.css'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='navbar-container'>
       <a href='/'> <div className='navbar-logo'><img src={Logo} alt="logo"/></div> </a> 
        <div className='navbar-items'>
            <a href='/'>Home</a>
            <a href='/read'>Read</a>
            <a href='/write'>Write</a>
        </div>
    </div>
  )
}

export default NavBar