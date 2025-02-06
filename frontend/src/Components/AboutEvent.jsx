import React from 'react'
import '../stylesheets/Fonts.css'

const AboutEvent = () => {
    return (
        <>
            <div className="about-container bg-[#FDC000] w-screen min-h-screen  flex justify-center items-center p-4">
                <div className="container w-full md:w-[80%] lg:w-[70%] bg-[#fffce1] rounded-3xl p-6 md:p-10 flex flex-col items-center gap-6">

                    {/* Heading */}
                    <h1 className="audiowide-regular welcome-text text-3xl md:text-6xl font-extrabold text-gray-800 text-center">
                        ABOUT CSITSS 2025
                    </h1>

                    {/* Event Content */}
                    <div className="tracking-tight event-text-container flex flex-col md:flex-row gap-6">

                        {/* Left Section - Text */}
                        <div className="left flex-1">
                            <p className=" text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
                                The 8th International Conference on Computational Systems and Information Technology for Sustainable Solutions
                                <strong className='audiowide-regular'> [CSITSS — 2025] </strong> focuses on bringing together leading academicians, scientists, researchers, industry representatives, and scholars worldwide
                                to share their expertise in fields such as **AI, Quantum Mechanics, Cyber-Physical Systems, and Renewable Energy.**
                            </p>
                            <p className="mt-4 text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
                                The conference will take place from <strong >November 7th - 9th, 2024</strong> and is approved by IEEE with conference number **64042**. Selected papers will be
                                published in the IEEE digital library.
                            </p>

                            {/* Submit Button */}
                            <button className="mt-6 w-full px-6 py-3 bg-[#f35d59] text-white text-lg font-semibold rounded-lg shadow-lg 
                hover:bg-red-700 transition duration-300 transform hover:scale-105 active:scale-95">
                                Submit Paper
                            </button>
                        </div>

                        {/* Right Section - Image */}
                        <div className="right flex-1 flex justify-center">
                            <img
                                src="/images/Poster.png"
                                alt="Event Poster"
                                className="w-full md:w-[85%] rounded-lg shadow-lg"
                            />
                        </div>

                    </div>
                </div>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FDC000" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,112C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </>

    );
}


export default AboutEvent