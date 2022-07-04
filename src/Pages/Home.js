import React,{useContext,useEffect} from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import concutting from '../images/Concrete-Groove-Cutting-Machine.jpg'
import tarcutting from '../images/Concrete-road-cutting-machine.jpg'
import corecutting from '../images/core-cutting-services-in-hyderabad.jpg'
import electrical from '../images/electrician.jpg'
import maintanence from '../images/Maintenance-Management.jpg'
import plumbing from '../images/Toilet-Plumbing-Service.webp'
import tank from '../images/watertankcleaning.png'
import chipping from '../images/chipping.jpg'
import renttool from '../images/toolsrental.jpg'
import './Home.css'
import { ServiceContext } from '../App'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    
  
  const {state,dispatch} = useContext(ServiceContext)
  const service = [
    {
      name:'Concrete Cutting',
      pic:`${concutting}`
    },
    {
      name:'Tar Cutting',
      pic:`${tarcutting}`
    },
    {
      name:'Core Cutting',
      pic:`${corecutting}`
    },
    {
      name:'Chipping Works',
      pic:`${chipping}`
    },
    {
      name:'Plumbing Works',
      pic:`${plumbing}`
    },
    {
      name:'Electrical Works',
      pic:`${electrical}`
    },
    {
      name:'Maintanence Works',
      pic:`${maintanence}`
    },
    {
      name:'Water Tank Cleaning',
      pic:`${tank}`
    },
    {
      name:'Tools Rental',
      pic:`${renttool}`
    },
   
  ]
  useEffect(()=>{
    dispatch({type:'SERVICE',payload:service})
  },[])
  
  return (
    <div className='homepage'>
       <NavBar/>
      <div className="bgimage">
        <div className='content'>
          <div className="title">
          <h1 style={{fontSize:'70px',fontWeight:'bold',textShadow:'white 1px 1px 1px'}}>We are here to Help You!</h1>
          </div>
          
        </div>
      </div>
      <div className="services ">
        <div className="subtitle">
          <h2>Our Services</h2>
        </div>
        <div className="row g-0 justifycontent">
          {service.map((obj,index)=>{
            
            return <div key={index} className=" col-sm-8 col-md-6 col-lg-3 cardcontainer">
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
          })}
          
        </div>
      </div>
      <div>
        <Footer/>
      </div>
       
    </div>
  )
}

export default Home