import '../App.css'
import React from 'react'
import Navbar from '../Components/Navbar'
import Venue from '../Components/Venue'
import Committee from '../Components/Commitee'
import ImpDates from '../Components/ImpDates'
import Home from '../Components/Home'
import About from '../Components/About'
import ActionCards from '../Components/ActionCards'
import AboutEvent from '../Components/AboutEvent'
import Footer from '../Components/Footer'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className="main-container">
        <Home />
        <About />
      </div>
      <AboutEvent />
      <ImpDates/>
      {/* <Committee/> */}
      <ActionCards/>
      <Venue/>
    </div>
  )
}

export default Landing