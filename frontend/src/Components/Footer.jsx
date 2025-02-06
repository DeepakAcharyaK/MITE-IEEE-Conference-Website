import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white w-full h-auto px-6 py-4 ">
                <div className="container mx-auto ">
                    <div className="footer-top w-full flex flex-col md:flex-row justify-center md:justify-start items-start gap-4 h-auto  px-2 py-3">
                        <div className="foot-links">
                            Useful Links
                            <ul className='ml-6'>
                                <li className='hover:cursor-pointer hover:text-yellow-300 text-red-500'>Important Dates</li>
                                <li className='hover:cursor-pointer hover:text-yellow-300 text-red-500'>Tracks</li>
                                <li className='hover:cursor-pointer hover:text-yellow-300 text-red-500'>Author Registration</li>
                                <li className='hover:cursor-pointer hover:text-yellow-300 text-red-500'>Author Guidelines</li>
                            </ul>
                        </div>
                        <div className="foot-contact">
                            Contact Us
                            <ul className='ml-6'>
                                <li>Mangalore Institute of Technology & Engineering (MITE)</li>
                                <li>Badaga Mijar, Near Moodabidre, Mangalore Tq, DK Dist</li>
                                <li>Karnataka - 574225</li>
                                <li>Phone: +91 9741731309/ 9945130850 /8258262695/ 96/ 97</li>
                                <li> Email: info@mite.ac.in</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full flex flex-col justify-center items-center text-center mb-2 mt-3 md:mb-0">
                        <h2 className="text-sm font-semibold">Mangalore Institute of Technology & Engineering (MITE)</h2>
                        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer