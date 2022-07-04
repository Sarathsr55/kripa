import React,{createContext,useReducer,useContext,useEffect} from 'react';
import { BrowserRouter, Route,Switch} from 'react-router-dom'
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import { initialState, reducer } from './Reducers/serviceReducer';
import concutting from './images/Concrete-Groove-Cutting-Machine.jpg'
import tarcutting from './images/Concrete-road-cutting-machine.jpg'
import corecutting from './images/core-cutting-services-in-hyderabad.jpg'
import electrical from './images/electrician.jpg'
import maintanence from './images/Maintenance-Management.jpg'
import plumbing from './images/Toilet-Plumbing-Service.webp'
import tank from './images/watertankcleaning.png'
import chipping from './images/chipping.jpg'
import renttool from './images/toolsrental.jpg'

export const ServiceContext = createContext()

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
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

    <ServiceContext.Provider value={{state,dispatch,service}}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' ><Home/></Route>
          <Route path='/services' ><Services/></Route>
          <Route path='/contact' ><Contact/></Route>
          <Route path='/about' ><About/></Route>
        </Switch>
      </BrowserRouter>
    </ServiceContext.Provider>
  );
}

export default App;
