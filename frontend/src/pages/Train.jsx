import React from "react";
import UploadDoc from "../components/UploadDoc";

const Train = () => {
  return (
    <div className=" flex flex-col justify-center  items-center h-screen">
      <div className="mb-32 justify-center items-center text-center">
        <h1 className="text-3xl">Time to Train your Bots</h1>
        <h1 className="text-xl mt-8">Drop your PGN file here</h1>
      </div>
      <div className="">
        <UploadDoc />
      </div>
    </div>
  );
};

export default Train;
