import React from "react";
import Size from "./assets/Size.svg";
import Shower from "./assets/Shower.svg";
import Bed from "./assets/Bed.svg";
import './index.css';

const NewCard = ({ image, title, type, rate }) => {
  return (
    <div className=' card mx-11'>    
        
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-lg shadow-black">
        <div>
          <img src={image} alt={image} className="object-cover" />
        </div>
        <h2 className="font-bold text-xl py-2 px-3">{title}</h2>
        <p className="text-sm text-gray-300  pt-2 px-3">{type}</p>
        <p className="text-orange-500 font-bold text-xl pb-4 px-3">{rate}</p>
        <div className="flex justify-around items-center border-t-2">
          <div className="flex justify-around items-center border-r-2 px-4 py-5">
            <img src={Bed} alt="icon" />
            <p className="p-2 font-bold text-xl">4</p>
          </div>
          <div className="flex justify-around items-center border-r-2 px-4 py-5 ">
            <img src={Shower} alt="icon" />
            <p className="p-2 font-bold text-xl">2</p>
          </div>
          <div className="flex justify-around items-center p-4">
            <img src={Size} alt="icon" />
            <p className="p-2 font-bold text-xl">2</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewCard;
