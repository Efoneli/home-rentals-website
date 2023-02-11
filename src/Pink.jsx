import React from "react";
import chairs from "./assets/chairs.jpg";
import Elipse from "./assets/Ellipse.png";
import play from "./assets/play-button.png";


function Pink() {
  return (
    <div className=" flex items-center justify-center bg-pink-50">
      <div className="flex justify-center flex-col p-6">
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <div className="flex p-2">
          <img src={Elipse} alt="elipse" />
          <div className="p-2">
            <h1 className="text-[#F4511E]">Harry Wilson</h1>
            <p>Property Owner</p>
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0">
      <img src={chairs} alt="chair" className="relative top-0 left-0" />
      <img src={play} alt="chair" className="absolute top-20 left-20" />
      </div>
    </div>
  );
}

export default Pink;
