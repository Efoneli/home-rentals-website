import React from "react";
import chairs from "./assets/chairs.jpg";
import Elipse from "./assets/Ellipse.png";


function Pink() {
  return (
    <div className=" flex bg-green-500">
      <div className="grid place-items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <div className="flex ">
          <img src={Elipse} alt="elipse" />
          <div className="">
            <h1>Harry Wilson</h1>
            <p>Property Owner</p>
          </div>
        </div>
      </div>
      <img src={chairs} alt="chair" />
    </div>
  );
}

export default Pink;
