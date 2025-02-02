import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Contacts = () => {
    const contacts = [
        {
            name: "John Doe",
            role: "Professor",
            phone: "+91 9876543210",
            email: "johndoe@university.edu",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            name: "Jane Smith",
            role: "Assistant Professor",
            phone: "+91 8765432109",
            email: "janesmith@university.edu",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Dr. Emily Brown",
            role: "HOD, Computer Science",
            phone: "+91 7654321098",
            email: "emilybrown@university.edu",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
            name: "Michael Johnson",
            role: "Lab Instructor",
            phone: "+91 6543210987",
            email: "michaelj@university.edu",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="w-full h-auto bg-gradient-to-b from-[#F9D153] to-[#CC5A4A] py-10 px-6 flex flex-col gap-5 items-center justify-center">
            <h1 className="text-4xl font-bold">Have a Query? We're Here to Help You!</h1>
                <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl hover:shadow-xl transition-all p-6 text-center flex flex-col items-center"
                        >
                            {/* Profile Image */}
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                            />

                            {/* Contact Info */}
                            <h3 className="font-semibold text-gray-800 mt-3 text-lg">{contact.name}</h3>
                            <p className="text-gray-600 text-sm">{contact.role}</p>

                            {/* Contact Details */}
                            <div className="mt-4 text-left w-full">
                                <p className="text-sm text-gray-500 font-semibold">Contact No:{contact.phone}</p>
                            </div>

                            <div className="mt-2 text-left w-full">
                                <p className="text-sm text-gray-500 font-semibold">Email:{contact.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contacts;
