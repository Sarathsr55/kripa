import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/NavBar'
import Joy from '../images/Joy.jpg'
import './About.css'

const About = () => {
  return (
    <div>
      <NavBar/>

      <div className="about">
        <div className='aboutheader' >
          <h1>About Us</h1>
        </div>
        <div className="profilepic">
          <img className='profileimage' src={Joy} alt="" />
        </div>
        <div className="profilecaption">
          <h2>Founder of Kripa Solutions</h2>
        </div>
        <div className="aboutcontents">
          <h4>Kripa Solutions was established in 2011 with an eye on specialization in Construction, Electrical & Plumbing services.</h4>
          <h4>We therefore have the chance to start with a well experienced professionals and experienced technicians. We undertake works in the area of Concrete cutting, Tar cutting, Core Cutting, chipping works, Electrical works, Plumbing works, Water tank cleaning. Also we are providing our tools for rent.</h4>
          <h4>We ensured quality services in all our projects and do our best in upcoming projects also.</h4>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About