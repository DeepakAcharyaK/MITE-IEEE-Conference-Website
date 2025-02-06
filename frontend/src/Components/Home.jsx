import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { CgArrowTopRightO } from "react-icons/cg";

const Home = () => {

    useGSAP(() => {
      const tl=gsap.timeline()

      tl.from('.welcome-text-heading', {
        duration:1,
        delay:.5,
        opacity:0,
        ease:'power2.in',
      });

      tl.from('h2',{
        duration: 2,
        opacity:0,
        stagger:.5,
        ease:'power2.in',
      })
    });

    return (
      <>
        <div id='home' className="home-conatiner w-screen h-screen flex flex-col justify-center items-center">
          <div className="h-conatiner w-[90%] md:w-[70%] flex flex-col justify-center items-center text-center  gap-2 md:gap-10 rounded-md px-2 py-3">
            <h1 className='welcome-text-heading text-4xl md:text-7xl  font-extrabold'>WELCOME TO CSITSS-2025</h1>
            <h2 className='welcome-text text-white font-medium text-2xl md:text-4xl'>8th International Conference on Computational Systems and Information Technology for Sustainable Solutions</h2>
            <h2 className='welcome-text text-white text-2xl md:text-4xl'>Organized by</h2>
            <h2 className='welcome-text text-white text-2xl md:text-4xl'>Mangalore Institute of Technology & Engineering (MITE)</h2>
          </div>
  
          {/* Modern Button with Padding */}
          <button className='flex items-center gap-2 text-2xl mt-6 px-4 py-2 bg-[#f35d59] text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-red-700 active:scale-95 focus:outline-none '>
            Read me more <CgArrowTopRightO/>
          </button>
        </div>
      </>
    );
  };

export default Home