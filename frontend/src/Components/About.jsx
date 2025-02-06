import { React, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CgArrowTopRightO } from 'react-icons/cg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const abouthead = useRef(null)
  useGSAP(() => {
    gsap.from(abouthead.current, {
      opacity: 0,
      duration: 1,
      ease: 'elastic.inOut(1)',
      delay: .5,
      yoyo: true,
      scrollTrigger: {
        marker: true,
        scroller: '.main-container',
        trigger: abouthead.current,
        start: 'top 80%',
        end: 'top 60%',
      }
    })
  })

  return (
    <>
      <div id='home' className="About-container rounded-tl-lg rounded-tr-lg">
        <div className='w-screen min-h-screen flex justify-end items-center flex-col'>
          <div className="container w-[90%] md:w-[70%] flex flex-col justify-center items-center gap-4">
            <h1 ref={abouthead} className='welcome-text text-white text-2xl border p-2 font-bold md:text-6xl'><span className='text-[#f35d59]'>ABOUT</span> <span className='text-[#FDC000]'>MITE</span> </h1>
            <p ref={abouthead} className='text-white rounded-t-3xl p-5 text-justify md:text-2xl'>
              In the realm of technical education, <span className='text-[#FDC000] '> Mangalore Institute of Technology & Engineering (MITE)</span> emerges as a distinguished landmark. Established in 2007, MITE now boasts over 3000 students and 180 expert faculty members, offering a diverse array of academic programs. These include 10 cutting-edge Undergraduate Engineering Programs, advanced Postgraduate Engineering courses, an MBA, an MCA, and 7 intensive Research Programs. Renowned for its commitment to excellence, <span className='text-[#FDC000] '>  MITE is an Autonomous institution affiliated with Visvesvaraya Technological University (VTU), Belagavi and recognized by the AICTE, New Delhi. MITE has earned the prestigious NAAC A+ Grade and a notable position in the NIRF Innovation Band 151-300,</span> reflecting its unwavering dedication to fostering innovation and delivering quality education.
            </p>
          </div>
          <a href="https://mite.ac.in/about/" target="_blank">
          <button className='flex items-center gap-2 text-2xl mt-6 px-4 py-2 bg-[#f35d59] text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none hover:bg-red-700  '>
            Read me more <CgArrowTopRightO />
          </button>
          </a>
        </div>

        <div className="wave w-full h-10">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FDC000" fillOpacity="1" d="M0,38L20,76C40,114,80,190,120,202.7C160,215,200,165,240,177.3C280,190,320,266,360,272.3C400,279,440,215,480,202.7C520,190,560,228,600,209C640,190,680,114,720,120.3C760,127,800,215,840,266C880,317,920,329,960,291.3C1000,253,1040,165,1080,164.7C1120,165,1160,253,1200,272.3C1240,291,1280,241,1320,196.3C1360,152,1400,114,1440,114C1480,114,1520,152,1560,158.3C1600,165,1640,139,1680,107.7C1720,76,1760,38,1800,25.3C1840,13,1880,25,1920,44.3C1960,63,2000,89,2040,107.7C2080,127,2120,139,2160,177.3C2200,215,2240,279,2280,297.7C2320,317,2360,291,2400,234.3C2440,177,2480,89,2520,95C2560,101,2600,203,2640,228C2680,253,2720,203,2760,152C2800,101,2840,51,2860,25.3L2880,0L2880,380L2860,380C2840,380,2800,380,2760,380C2720,380,2680,380,2640,380C2600,380,2560,380,2520,380C2480,380,2440,380,2400,380C2360,380,2320,380,2280,380C2240,380,2200,380,2160,380C2120,380,2080,380,2040,380C2000,380,1960,380,1920,380C1880,380,1840,380,1800,380C1760,380,1720,380,1680,380C1640,380,1600,380,1560,380C1520,380,1480,380,1440,380C1400,380,1360,380,1320,380C1280,380,1240,380,1200,380C1160,380,1120,380,1080,380C1040,380,1000,380,960,380C920,380,880,380,840,380C800,380,760,380,720,380C680,380,640,380,600,380C560,380,520,380,480,380C440,380,400,380,360,380C320,380,280,380,240,380C200,380,160,380,120,380C80,380,40,380,20,380L0,380Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default About;
