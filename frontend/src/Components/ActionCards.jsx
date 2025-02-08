import * as React from 'react';
import Cards from './Cards';

const topSpeakers = [
  { name: 'Ananya Sharma', profession: 'Data Scientist', address: 'IIT Delhi, New Delhi' },
  { name: 'Rahul Verma', profession: 'Product Manager', address: 'Google, Hyderabad' },
  { name: 'Priya Nair', profession: 'AI Researcher', address: 'IIIT Bangalore, Bangalore' },
  { name: 'Karthik Iyer', profession: 'Software Architect', address: 'Microsoft, Bengaluru' },
];

const Judge = [
  { name: 'Dr. Meera Joshi', profession: 'Professor of Robotics', address: 'IISc, Bangalore' },
  { name: 'Arvind Gupta', profession: 'Cybersecurity Analyst', address: 'Deloitte, Mumbai' },
  { name: 'Sneha Reddy', profession: 'Business Consultant', address: 'Accenture, Pune' },
];


function SelectActionCard() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000" fillOpacity="1" d="M0,192L24,192C48,192,96,192,144,202.7C192,213,240,235,288,234.7C336,235,384,213,432,181.3C480,149,528,107,576,117.3C624,128,672,192,720,202.7C768,213,816,171,864,154.7C912,139,960,149,1008,154.7C1056,160,1104,160,1152,160C1200,160,1248,160,1296,170.7C1344,181,1392,203,1416,213.3L1440,224V320H0V192Z"></path>
      </svg>

      <div className="card-container w-full h-auto px-4 py-5 bg-black">
        <h1 className="uppercase text-3xl md:text-6xl font-extrabold text-yellow-300 text-center">
          Committee
        </h1>

        <div className="w-full mt-10 flex flex-col items-center justify-center">
          <h1 className="uppercase text-3xl md:text-6xl font-extrabold text-white text-center">
            TOP SPEAKERS
          </h1>
          <div className="w-full flex justify-evenly flex-wrap gap-4">
            {topSpeakers.map((speaker, index) => (
              <Cards key={index} theme="#FDC000" speaker={speaker} />
            ))}
          </div>
        </div>

        <div className="w-full mt-10 flex flex-col items-center justify-center">
          <h1 className="uppercase text-3xl md:text-6xl font-extrabold text-white text-center">
            GUEST
          </h1>
          <div className="w-full flex justify-evenly flex-wrap gap-4">
            {Judge.map((speaker, index) => (
              <Cards key={index} theme="#1E90FF" speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectActionCard;

