import React from 'react'

const Venue = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 gap-8">
            {/* Left Side - Map */}
            <div className="w-full lg:w-1/2 h-96">
                <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.497134693877!2d-122.41941508468156!3d37.77492927975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a6d8d1%3A0x66400f8f22b4a2b5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633127712045!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Right Side - Address */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-gray-800">Venue Location</h2>
                <p className="text-lg mt-4 text-gray-600 text-center">
                    <strong>Conference Venue:</strong>
                    <br /> XYZ Conference Center
                    <br /> 123 Main Street, San Francisco, CA
                    <br /> United States
                </p>
                <p className="mt-4 text-gray-600">
                    <strong>Email:</strong> contact@conference.com
                </p>
                <p className="mt-2 text-gray-600">
                    <strong>Phone:</strong> +1 234 567 890
                </p>
            </div>
        </div>
    );
};

export default Venue