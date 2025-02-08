import React from 'react'
import { Avatar, Button } from "@mui/material";


const Cards = ({ speaker, theme }) => {
    return (
      <div
        className="rounded-3xl p-6 w-80 h-80"
        style={{ background: `linear-gradient(to bottom, black, ${theme})` }}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-40 h-40 rounded-full object-cover object-center"
            alt={speaker.name}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />
          <h2 className="text-2xl font-semibold text-gray-200 mt-2">{speaker.name}</h2>
          <h4 className="text-md font-thin text-white">{speaker.profession}</h4>
          <h4 className="text-md font-thin text-white">{speaker.address}</h4>
        </div>
      </div>
    );
  };
  
  export default Cards;
  