import React from "react";
import chairs from "./assets/chairs.jpg";
import Elipse from "./assets/Ellipse.png";
import play from "./assets/play-button.png";


function Pink() {
  return (
    <div className=" flex justify-between my-16 bg-pink-50">
      <div className="flex justify-center flex-col px-6">
        <p className="px-4 bg-[url('./assets/quote.png')] bg-no-repeat bg-opacity-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br/>
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel <br/>
          pellentesque est. Curabitur at odio sit amet libero vulputate<br/>
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam <br/>massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus <br/> a lacus
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
      <img src={chairs} alt="chair" className="relative top-0 left-0 opacity-70" />
      <img src={play} alt="chair" className="absolute top-60 left-80" />
      </div>
    </div>
  );
}

export default Pink;
