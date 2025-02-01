import '../App.css'
import React from 'react'
import Navbar from '../Components/Navbar'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className="main-container">
        <Home />
        <About />
      </div>
      <AboutEvent />
      <ImpDate/>
      <Committee/>
      <Contact />

    </div>
  )
}

const Home = () => {
  return (
    <>
      <div id='home' className="home-conatiner w-screen h-screen flex flex-col justify-center items-center">
        <div className="h-conatiner w-[90%] md:w-[70%] flex flex-col justify-center items-center text-center rounded-md p-2">
          <h1 className='text-2xl font-extrabold'>WELCOME TO CSITSS-2024</h1>
          <h2 className='text-xl font-medium'>8th International Conference on Computational Systems and Information Technology for Sustainable Solutions</h2>
          <h3>Organized by</h3>
          <h2 className='text-sm font-bold'>Mangalore Institute of Technology & Engineering (MITE)</h2>
        </div>

        {/* Modern Button with Padding */}
        <button className=' mt-6 px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-800 text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none '>
          Read me more
        </button>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="About-container rounded-tl-lg  rounded-tr-lg w-screen min-h-screen flex justify-center items-center">
        <div className="conatiner w-[90%] md:w-[70%]  flex flex-col justify-center items-center gap-4">
          <h1 className='text-2xl font-bold md:text-6xl'>About MITE</h1>
          <p className='text-justify md:text-2xl'>In the realm of technical education, Mangalore Institute of Technology & Engineering (MITE) emerges as a distinguished landmark. Established in 2007, MITE now boasts over 3000 students and 180 expert faculty members, offering a diverse array of academic programs. These include 10 cutting-edge Undergraduate Engineering Programs, advanced Postgraduate Engineering courses, an MBA, an MCA, and 7 intensive Research Programs. Renowned for its commitment to excellence, MITE is an Autonomous institution affiliated with Visvesvaraya Technological University (VTU), Belagavi and recognized by the AICTE, New Delhi. MITE has earned the prestigious NAAC A+ Grade and a notable position in the NIRF Innovation Band 151-300, reflecting its unwavering dedication to fostering innovation and delivering quality education.</p>
        </div>
      </div>
    </>
  )
}

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

const ImpDate = () => {
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

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-6 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-6 md:p-8">
        
        {/* Address */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
          <p className="text-gray-700 font-medium">123 Conference Street, City, Country</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-blue-600 text-2xl"></i>
          <p className="text-gray-700 font-medium">contact@example.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-phone text-blue-600 text-2xl"></i>
          <p className="text-gray-700 font-medium">+123 456 7890</p>
        </div>

      </div>
    </div>
  );
};


export default Landing