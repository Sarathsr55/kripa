import React, {  useContext } from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
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
                <Card className='box'>
                <CardMedia 
                  component="img"
                  height="200"
                  image={obj.pic}
                  alt="green iguana"
                />

                <CardContent sx={{padding:'0px',marginTop:'30px'}} className='justifycontent alignitems'>
                
                  <h3 className='font ' >{obj.name}</h3>
                </CardContent>
                

              </Card>
              </div>
            
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services