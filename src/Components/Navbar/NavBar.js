import React from 'react'
import { Link } from 'react-router-dom'
import LOGO1 from '../../images/LOGO1.png'
import './NavBar.css'


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="logo row g-0">
                    <img className='logopic col-md-6' src={LOGO1} alt="" />
                <div className="logoname col-md-6">
                    <h2 style={{color:'white'}}>Kripa Solutions</h2>
                </div>
            </div>
            <div className="links">
                <Link to="/"><li><div>Home</div></li></Link>
                <Link to="/about"><li><div>About Us</div></li></Link>
                <Link to="/services"><li><div>Our Services</div></li></Link>
                <Link to="/contact"><li><div>Contact Us</div></li></Link>
            </div>
        </div>
    )
}

export default NavBar