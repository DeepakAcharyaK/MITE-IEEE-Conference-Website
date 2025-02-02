import React from 'react'

const ImpDates = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
            <div className="w-full md:w-3/4 lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-lg">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
                    Important Dates
                </h1>

                {/* Timeline */}
                <div className="relative border-l-4 border-blue-500 pl-6">

                    {/* Submission of Full-length Manuscript */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Submission of Full-length Manuscript (opens from)</h2>
                        </div>
                        <p className="ml-6 text-gray-700">5th July 2024</p>
                    </div>

                    {/* Last date to submit Full-length Manuscript */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Last date to submit Full-length Manuscript</h2>
                        </div>
                        <p className="ml-6 text-gray-700">14th August 2024</p>
                    </div>

                    {/* Notification of Acceptance */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Notification of Acceptance</h2>
                        </div>
                        <p className="ml-6 text-gray-700">
                            <s>28th August 2024</s> <span className="font-bold text-red-600">7th September 2024</span>
                        </p>
                    </div>

                    {/* Early Bird Registration */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Early Bird Registration</h2>
                        </div>
                        <p className="ml-6 text-gray-700">Before 18th September 2024</p>
                    </div>

                    {/* Last Date for Registration */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Last Date for Registration</h2>
                        </div>
                        <p className="ml-6 text-gray-700"><s>3rd October 2024</s></p>
                    </div>

                    {/* Camera-ready Manuscript Submission */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Submission of Camera-ready Manuscript and Copyright Form</h2>
                        </div>
                        <p className="ml-6 text-gray-700">10th October 2024</p>
                    </div>

                    {/* Pre-Conference Tutorial */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Pre-Conference Tutorial</h2>
                        </div>
                        <p className="ml-6 text-gray-700">7th November 2024</p>
                        <p className="ml-6 text-gray-600">Venue: ISE Department | Time: 8:30 AM - 9:30 AM</p>
                    </div>

                    {/* Conference Dates */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                            <h2 className="text-lg font-semibold">Conference Dates</h2>
                        </div>
                        <p className="ml-6 text-gray-700">8th and 9th November 2024</p>
                    </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-green-600 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                        Download Pre-Conference Schedule
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImpDates