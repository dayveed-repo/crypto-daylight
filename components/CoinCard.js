import millify from "millify";
import React from "react";

const CoinCard = ({ name, id, price, dailyChange, marketCap, icon }) => {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-slate-500 p-2 shadow-lg rounded-md">
      <div className="flex items-center space-x-2 mb-10">
        <h4 className="text-gray-400">{id}.</h4>
        <h3 className="flex-grow text-gray-200">{name}</h3>
        <img src={icon} alt={name} className="h-8 w-8 object-contain" />
      </div>

      <div>
        <div className="flex items-center space-x-3">
          <h4 className="text-slate-400">Price</h4>
          <p className="text-slate-300">$ {millify(price)}</p>
        </div>

        <div className="flex items-center space-x-3">
          <h4 className="text-slate-400">Market Cap</h4>
          <p className="text-slate-300">{millify(marketCap)}</p>
        </div>

        <div className="flex items-center space-x-3">
          <h4 className="text-slate-400">Daily Change</h4>
          <p className="text-slate-300">{dailyChange}%</p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
