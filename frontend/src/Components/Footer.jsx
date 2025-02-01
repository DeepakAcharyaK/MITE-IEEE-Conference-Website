import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-6 mt-12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">MITE IEEE Conference</h2>
                        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            {/* <FaFacebook className="text-xl hover:text-blue-500 transition duration-300" /> */}
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            {/* <FaTwitter className="text-xl hover:text-blue-400 transition duration-300" /> */}
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            {/* <FaLinkedin className="text-xl hover:text-blue-600 transition duration-300" /> */}
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            {/* <FaInstagram className="text-xl hover:text-pink-500 transition duration-300" /> */}
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        {/* <Link to="/" className="text-sm hover:underline">Institute Website</Link> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer