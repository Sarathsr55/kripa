import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import CNDLOGO from '../../images/CND(Final).png'
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
                <h6> Meppukada , Malayinkeezhu</h6>
            </div>
            <div style={{left:'25px'}} className='justifycontent'>
                <PhoneIcon sx={{marginRight:'15px'}} />
                <h6> 8547139062 , 9562982656    </h6>
            </div>
            <div className='designedby' >
                <p style={{fontSize:10,paddingRight:60,paddingBottom:0}} >designed by</p>
                <img style={{height:60}} src={CNDLOGO} alt="" />
                
            </div>
            
        </div>

    </div>
  )
}

export default Footer