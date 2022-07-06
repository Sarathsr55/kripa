import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer font">
        <div className="foothead justifycontent">
            <h3>Contact Us</h3>
        </div>
        <div className="contact">
            <div className='justifycontent' >
                <LocationOnIcon sx={{marginRight:'10px'}}/>
                <h4> Meppukada , Malayinkeezhu</h4>
            </div>
            <div style={{left:'25px'}} className='justifycontent'>
                <PhoneIcon sx={{marginRight:'15px'}} />
                <h4> 8547139062 , 9562982656    </h4>
            </div>
            <div className='poweredby' >
                <h6>designed by  </h6>
                
            </div>
            <div className='designedby' >
                <h6>Sarath R</h6>
                
            </div>
            
        </div>

    </div>
  )
}

export default Footer