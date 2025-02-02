import React from 'react'

const AboutEvent = () => {
    return (
        <div className="about-container w-screen min-h-screen  flex justify-center items-center p-4">
            <div className="container w-full md:w-[80%] lg:w-[70%] bg-white shadow-2xl rounded-xl p-6 md:p-10 flex flex-col items-center gap-6">

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
                    About <span className="text-blue-600">CSITSS 2024</span>
                </h1>

                {/* Event Content */}
                <div className="event-text-container flex flex-col md:flex-row gap-6">

                    {/* Left Section - Text */}
                    <div className="left flex-1">
                        <p className="text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
                            The 8th International Conference on Computational Systems and Information Technology for Sustainable Solutions
                            <strong> [CSITSS — 2024] </strong> focuses on bringing together leading academicians, scientists, researchers, industry representatives, and scholars worldwide
                            to share their expertise in fields such as **AI, Quantum Mechanics, Cyber-Physical Systems, and Renewable Energy.**
                        </p>
                        <p className="mt-4 text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
                            The conference will take place from <strong>November 7th - 9th, 2024</strong> and is approved by IEEE with conference number **64042**. Selected papers will be
                            published in the IEEE digital library.
                        </p>

                        {/* Submit Button */}
                        <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg 
                hover:bg-blue-700 transition duration-300 transform hover:scale-105 active:scale-95">
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
    );
}


export default AboutEvent