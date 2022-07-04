import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import LOGO1 from '../../images/LOGO1.png'
import './NavBar.css'


const NavBar = () => {
    const [key, setKey] = useState('home');
    return (
        <div className='navbar'>
            <div className="logo">
                    <img className='logopic' src={LOGO1} alt="" />
                <div className="logoname">
                    <h2 style={{color:'white'}}>Kripa Solutions</h2>
                </div>
            </div>
            <div className="links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/services"><li>Our Services</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
            </div>
        </div>
    )
}

export default NavBar