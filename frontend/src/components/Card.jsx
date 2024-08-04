/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ imageSrc, loadingPercentage }) => {
  return (
    <div className="w-80 p-4 bg-white shadow-md rounded-lg">
      {/* Image */}
      <div className="relative h-0" style={{ paddingBottom: "70%" }}>
        <img
          src={imageSrc}
          alt="Card"
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Loading Bar */}
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-teal-600 bg-teal-200">
              Loading
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-teal-600 bg-teal-200">
              {loadingPercentage}%
            </span>
          </div>
          <div className="flex flex-col mt-2">
            <div
              className="relative pt-1"
              style={{ width: `${loadingPercentage}%` }}
            >
              <div className="flex mb-2 items-center justify-between text-xs font-semibold text-teal-600">
                <span className="inline-block py-1 px-2 rounded text-teal-600 bg-teal-200">
                  Progress
                </span>
              </div>
              <div className="flex h-2 bg-teal-200 rounded-lg">
                <div
                  className="h-full bg-teal-600 rounded-lg"
                  style={{ width: `${loadingPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Card;
