import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/NavBar'
import './Contact.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const Contact = () => {

  const [title, setTitle] = useState('')

  return (
    <div>
      <NavBar />


      <div className="contactus ">
        <div className="contactheader ">
          <h1>Contact Us</h1>
        </div>
        <div className="contactcontainer ">
          <div className="contactform">
            <TextField
              required
              id="outlined-required"
              label="Name"
              size='small'
              className='signintextfield'
            />

            <TextField
              required
              id="outlined-required"
              label="Phone number"
              size='small'
              className='signintextfield'
            />

            <TextField
              required
              id="outlined-required"
              label="Email Id"
              size='small'
              className='signintextfield'
            />

            <Button color='primary' variant="contained"  >Submit</Button>

            <Typography>Our technical team will contact you soon </Typography>

          </div>
        </div>
      </div>


      <Footer />
    </div>

  )
}

export default Contact