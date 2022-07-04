import React, { useState, useContext, useEffect } from 'react'
import NavBar from '../Components/Navbar/NavBar'
import concutting from '../images/Concrete-Groove-Cutting-Machine.jpg'
import tarcutting from '../images/Concrete-road-cutting-machine.jpg'
import corecutting from '../images/core-cutting-services-in-hyderabad.jpg'
import electrical from '../images/electrician.jpg'
import maintanence from '../images/Maintenance-Management.jpg'
import plumbing from '../images/Toilet-Plumbing-Service.webp'
import tank from '../images/watertankcleaning.png'
import chipping from '../images/chipping.jpg'
import renttool from '../images/toolsrental.jpg'
import './Services.css'
import { ServiceContext } from '../App'
import Footer from '../Components/Footer/Footer'

const Services = () => {

  const { state, dispatch, service } = useContext(ServiceContext)




  return (
    <div>
      <NavBar />

      <div className="service ">
        <div className="serviceheader ">
          <h1>Our Services</h1>
        </div>
        <div className="servicecontentscontainer row g-0">
          {service.map((obj, index) =>
            
              <div className='servicecontent col-md-6 col-lg-4' key={index} >
                <div className=''>
                  <img className='imageborder' src={obj.pic} alt="" />
                </div>
                <div>
                  <h1 className='font' style={{ marginBottom: '0px', padding: '5px' }}>{obj.name}</h1>
                  </div>
              </div>
            
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services