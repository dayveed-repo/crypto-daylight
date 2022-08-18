import React from "react";
import millify from "millify";

const StatsCard = ({ title, num }) => {
  return (
    <div className="h-28 p-2 bg-gradient-to-b from-slate-700 to-transparent flex flex-col justify-between">
      <h4 className="text-gray-300 text-sm font-semibold">{title}</h4>
      <p className="text-gray-200">{millify(Number(num))}</p>
    </div>
  );
};

export default StatsCard;
