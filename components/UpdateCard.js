import React from "react";

const UpdateCard = ({ id }) => {
  return (
    <div className="bg-gray-400 w-full h-full cursor-pointer">
      <img
        src="/crypto.jpg"
        alt="news image"
        className="w-full h-full rounded-sm object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:ease-out hover:duration-150 hover:scale-105 transition-all"
      />

      <div className="absolute bottom-3 left-5">
        <p className={`text-black ${id > 3 ? "text-xs" : "text-sm"} font-bold`}>
          Blochain just rose by 5%
        </p>
        <a className="text-[10px] bg-cyan-800 text-white rounded-md px-2 py-1">
          Read More
        </a>
      </div>
    </div>
  );
};

export default UpdateCard;
