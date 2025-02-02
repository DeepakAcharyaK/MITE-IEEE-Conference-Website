import React from 'react'

const Home = () => {
    return (
      <>
        <div id='home' className="home-conatiner w-screen h-screen flex flex-col justify-center items-center">
          <div className="h-conatiner w-[90%] md:w-[70%] flex flex-col justify-center items-center text-center rounded-md p-2">
            <h1 className='text-2xl font-extrabold'>WELCOME TO CSITSS-2024</h1>
            <h2 className='text-xl font-medium'>8th International Conference on Computational Systems and Information Technology for Sustainable Solutions</h2>
            <h3>Organized by</h3>
            <h2 className='text-sm font-bold'>Mangalore Institute of Technology & Engineering (MITE)</h2>
          </div>
  
          {/* Modern Button with Padding */}
          <button className=' mt-6 px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-800 text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none '>
            Read me more
          </button>
        </div>
      </>
    );
  };

export default Home