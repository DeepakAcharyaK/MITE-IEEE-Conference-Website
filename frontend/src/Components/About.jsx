import React from 'react'

const About = () => {
    return (
      <>
        <div className="About-container rounded-tl-lg  rounded-tr-lg w-screen min-h-screen flex justify-center items-center">
          <div className="conatiner w-[90%] md:w-[70%]  flex flex-col justify-center items-center gap-4">
            <h1 className='text-2xl font-bold md:text-6xl'>About MITE</h1>
            <p className='text-justify md:text-2xl'>In the realm of technical education, Mangalore Institute of Technology & Engineering (MITE) emerges as a distinguished landmark. Established in 2007, MITE now boasts over 3000 students and 180 expert faculty members, offering a diverse array of academic programs. These include 10 cutting-edge Undergraduate Engineering Programs, advanced Postgraduate Engineering courses, an MBA, an MCA, and 7 intensive Research Programs. Renowned for its commitment to excellence, MITE is an Autonomous institution affiliated with Visvesvaraya Technological University (VTU), Belagavi and recognized by the AICTE, New Delhi. MITE has earned the prestigious NAAC A+ Grade and a notable position in the NIRF Innovation Band 151-300, reflecting its unwavering dedication to fostering innovation and delivering quality education.</p>
            <video autoPlay loop muted src="/videos/mite-video.mp4"></video>
          </div>
        </div>
      </>
    )
  }

export default About