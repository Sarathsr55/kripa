import React,{useContext,useEffect} from 'react'
import NavBar from '../Components/Navbar/NavBar'
import concutting from '../images/Concrete-Groove-Cutting-Machine.jpg'
import tarcutting from '../images/Concrete-road-cutting-machine.jpg'
import corecutting from '../images/core-cutting-services-in-hyderabad.jpg'
import electrical from '../images/electrician.jpg'
import maintanence from '../images/Maintenance-Management.jpg'
import plumbing from '../images/plumbing works.jpg'
import tank from '../images/watertankcleaning.png'
import chipping from '../images/chipping.jpg'
import renttool from '../images/toolsrental.jpg'
import video from '../images/Corecutting-video.mp4'
import video1 from '../images/Concretecutting-video.mp4'
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
          <h2>Our Updates</h2>
        </div>
        <div className="player-wrapper">
          <video   className='video' controls  loop autoPlay muted>
            <source  src={video} type="video/mp4" />
          </video>
          <div className='videocontent' >
            <div className='video-heading'>
              <h4>Core Cutting</h4>
            </div>
            <div>
              <p>
              Core cutting is a technique used for creating openings for pipes, wires, ventilating or air conditioning vents to fit through, and to avoid going through reinforcement core cutting must be carefully planned.
              On brick walls, RCC walls, black stones, slabs, beams, columns, and water tanks, etc core-cutting can be done.
              To make holes of 2 to 12-inch diameters and up to 2 meters of depth, the core-cutting method can be used.

              </p>
            </div>
          </div>
          
        </div>

        <div className="player-wrapper1">
          <video   className='video' controls  loop autoPlay muted>
            <source  src={video1} type="video/mp4" />
          </video>
          <div className='videocontent1' >
            <div className='video-heading'>
              <h4>Core Cutting</h4>
            </div>
            <div>
              <p>
              Concrete cutting is a process of controlled sawing, drilling and removing concrete with precision, accuracy without any mistakes.
              In the past, Concrete cutting is only possible using jackhammers to break up the concrete, but that method left everything dusty and messy. Modern concrete cutting techniques involve the use of specialized machinery to leave a smooth, attractive finish of concrete, asphalt, metal and rock.

              </p>
            </div>
          </div>
          
        </div>


      </div>
      <div>
        <Footer/>
      </div>
       
    </div>
  )
}

export default Home