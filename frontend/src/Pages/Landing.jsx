import '../App.css'
import React from 'react'
import Navbar from '../Components/Navbar'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className="main-container">
          <Home/>
          <About/>
        </div>
        <Contact/>
    </div>
  )
}

const Home=()=>{
  return(
    <>
      <div className="home-conatiner w-screen h-screen flex justify-center items-center">
          <h1 className='text-7xl'>Home</h1>
      </div>
    </>
  )
}

const About=()=>{
  return(
    <>
      <div className="About-container rounded-tl-lg  rounded-tr-lg w-screen min-h-screen flex justify-center items-center">
          <div className="conatiner w-[70%]  flex flex-col justify-center items-center">
            <h1 className='text-2xl md:text-6xl'>About MITE</h1>
            <p className='text-justify md:text-2xl'>In the realm of technical education, Mangalore Institute of Technology & Engineering (MITE) emerges as a distinguished landmark. Established in 2007, MITE now boasts over 3000 students and 180 expert faculty members, offering a diverse array of academic programs. These include 10 cutting-edge Undergraduate Engineering Programs, advanced Postgraduate Engineering courses, an MBA, an MCA, and 7 intensive Research Programs. Renowned for its commitment to excellence, MITE is an Autonomous institution affiliated with Visvesvaraya Technological University (VTU), Belagavi and recognized by the AICTE, New Delhi. MITE has earned the prestigious NAAC A+ Grade and a notable position in the NIRF Innovation Band 151-300, reflecting its unwavering dedication to fostering innovation and delivering quality education.</p>
          </div>
      </div>
    </>
  )
}

const Contact=()=>{
  return(
    <>
      <div className="contact-conatiner w-screen h-screen flex justify-center items-center">
          <h1 className='text-7xl'>Contact</h1>
      </div>
    </>
  )
}

export default Landing