import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BsChevronDoubleRight } from "react-icons/bs";

const ImpDates = () => {
    const date = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(date.current, {
            y: 400,
            delay: 1,
            duration: 2.5,
            ease: "steps(8)",
            repeat: -1
        })
    })

    return (
        <div className="w-full min-h-screen flex flex-col items-center py-10 px-4">
            <div id='impdate' className="w-full md:w-3/4 lg:w-2/3 bg-[#fffce1] p-6 md:p-6 rounded-3xl">

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-center text-black mb-8 uppercase audiowide-regular ">
                    Important Dates
                </h1>

                {/* Timeline */}
                <div className="relative border-l-8 border-l-green-600   pl-4 ">

                    <div ref={date} className="point w-5 h-5  absolute left-0"><BsChevronDoubleRight style={{ fontSize: 30, color: '#f35d59' }} /></div>

                    {/* Submission of Full-length Manuscript */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4  rounded-full"></div>
                            <h2 className="text-lg font-semibold">Submission of Full-length Manuscript (opens from)</h2>
                        </div>
                        <p className="ml-6 text-gray-700">5th July 2024</p>
                    </div>

                    <hr className='border-black md:w-1/2' />

                    {/* Last date to submit Full-length Manuscript */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4  rounded-full"></div>
                            <h2 className="text-lg font-semibold">Last date to submit Full-length Manuscript</h2>
                        </div>
                        <p className="ml-6 text-gray-700">14th August 2024</p>
                    </div>

                    <hr className='border-black md:w-1/2' />

                    {/* Notification of Acceptance */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4  rounded-full"></div>
                            <h2 className="text-lg font-semibold">Notification of Acceptance</h2>
                        </div>
                        <p className="ml-6 ">
                            <s>28th August 2024</s> <span className="font-bold text-red-600">7th September 2024</span>
                        </p>
                    </div>

                    <hr className='border-black md:w-1/2' />


                    {/* Early Bird Registration */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4  rounded-full"></div>
                            <h2 className="text-lg font-semibold">Early Bird Registration</h2>
                        </div>
                        <p className="ml-6 text-gray-700">Before 18th September 2024</p>
                    </div>

                    <hr className='border-black md:w-1/2' />


                    {/* Last Date for Registration */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4  rounded-full"></div>
                            <h2 className="text-lg font-semibold">Last Date for Registration</h2>
                        </div>
                        <p className="ml-6 text-gray-700"><s>3rd October 2024</s></p>
                    </div>

                    <hr className='border-black md:w-1/2' />

                    {/* Camera-ready Manuscript Submission */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Submission of Camera-ready Manuscript and Copyright Form</h2>
                        </div>
                        <p className="ml-6 text-gray-700">10th October 2024</p>
                    </div>

                    <hr className='border-black md:w-1/2' />

                    {/* Pre-Conference Tutorial */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Pre-Conference Tutorial</h2>
                        </div>
                        <p className="ml-6 text-gray-700">7th November 2024</p>
                        <p className="ml-6 text-gray-600">Venue: ISE Department | Time: 8:30 AM - 9:30 AM</p>
                    </div>

                    <hr className='border-black md:w-1/2' />

                    {/* Conference Dates */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Conference Dates</h2>
                        </div>
                        <p className="ml-6 text-gray-700">8th and 9th November 2024</p>
                    </div>
                </div>


                {/* Download Button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-[#f35d59] text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                        Download Pre-Conference Schedule
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImpDates