import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import CoinCard from "./CoinCard";
import { TbMoodEmpty } from "react-icons/tb";

const CryptoCurrency = () => {
  const { cryptoCoins } = useSelector((state) => state.appReducer);
  const [input, setinput] = useState("");
  const [filteredCoins, setfilteredCoins] = useState([]);

  useEffect(() => {
    let filtered = cryptoCoins?.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );

    setfilteredCoins(filtered);
  }, [input]);

  return (
    <div className="AppBodyContainer">
      <div className="mx-auto max-w-xl flex flex-col items-center mb-10">
        <div className="flex items-center space-x-2 bg-slate-500 px-3 py-1 rounded-md focus-within:shadow-lg w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-lg outline-none flex-grow"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <AiOutlineSearch className="text-gray-700" />
        </div>

        <h4 className="text-gray-500 text-sm font-semibold mt-3">
          Search for Crypto Currency
        </h4>
      </div>

      {filteredCoins?.length ? (
        <div className="max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto">
          {filteredCoins.map((coin, i) => (
            <CoinCard
              key={i}
              name={coin?.name}
              uid={coin?.uuid}
              icon={coin?.iconUrl}
              id={coin?.rank}
              marketCap={coin?.marketCap}
              dailyChange={coin?.change}
              price={coin?.price}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 text-gray-500">
          <h4 className="text-lg font-semibold">No crypto Found</h4>
          <TbMoodEmpty className="text-3xl" />
        </div>
      )}
    </div>
  );
};

export default CryptoCurrency;
