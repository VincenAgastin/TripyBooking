import React from 'react'
import '../navbar/Navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">TripyBooking</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar