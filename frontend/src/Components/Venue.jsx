import { Typography } from '@mui/material';
import React from 'react';

const Venue = () => {
    return (

        <>
            <div className="w-screen h-auto flex flex-col items-center justify-center pt-5">
                <h1 className='text-3xl md:text-5xl font-bold text-center text-black mb-8 uppercase audiowide-regular '>Venue</h1>
                <div className='flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-4 lg:gap-8'>

                    {/* Left Side - Map */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-96 bg-red-500 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.765066747035!2d74.96389987484288!3d13.05062068727205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3557f8322286d%3A0x258a2e8d6d4b45b0!2sMangalore%20Institute%20of%20Technology%20and%20Engineering%2C%20MITE!5e0!3m2!1sen!2sin!4v1738862402385!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Right Side - Address */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-orange-500 rounded-xl overflow-hidden shadow-md">
                        <video className="w-full h-full object-cover lg:h-96" src="/videos/mite-video.mp4" loop autoPlay muted></video>
                    </div>

                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,64L20,85.3C40,107,80,149,120,144C160,139,200,85,240,101.3C280,117,320,203,360,202.7C400,203,440,117,480,85.3C520,53,560,75,600,85.3C640,96,680,96,720,112C760,128,800,160,840,197.3C880,235,920,277,960,282.7C1000,288,1040,256,1080,234.7C1120,213,1160,203,1200,202.7C1240,203,1280,213,1320,192C1360,171,1400,117,1420,90.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </>

    );
};

export default Venue;
