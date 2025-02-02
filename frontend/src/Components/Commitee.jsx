import React from 'react'

const Committee = () => {
    const committeeMembers = [
        {
            name: "Dr. John Doe",
            role: "Conference Chair",
            image: "https://via.placeholder.com/150",
            linkedin: "#",
            twitter: "#",
        },
        {
            name: "Prof. Jane Smith",
            role: "Technical Program Chair",
            image: "https://via.placeholder.com/150",
            linkedin: "#",
            twitter: "#",
        },
        {
            name: "Dr. Michael Brown",
            role: "Finance Chair",
            image: "https://via.placeholder.com/150",
            linkedin: "#",
            twitter: "#",
        },
        {
            name: "Dr. Emily Johnson",
            role: "Publicity Chair",
            image: "https://via.placeholder.com/150",
            linkedin: "#",
            twitter: "#",
        },
    ];
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
            <div className="w-full md:w-4/5 lg:w-3/4 bg-white p-6 md:p-10 rounded-xl shadow-lg">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
                    Meet Our Committee Members
                </h1>

                {/* Committee Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {committeeMembers.map((member, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
                            <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-500" />
                            <h2 className="text-lg font-semibold">{member.name}</h2>
                            <p className="text-gray-600">{member.role}</p>

                            {/* Social Links */}
                            <div className="mt-3 flex justify-center space-x-3">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin text-blue-600 text-xl hover:text-blue-800"></i>
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-blue-400 text-xl hover:text-blue-600"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Committee