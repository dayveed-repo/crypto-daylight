import React from "react";
import { useSelector } from "react-redux";
import CoinCard from "./CoinCard";
import StatsCard from "./StatsCard";
import UpdateCard from "./UpdateCard";

const DashBoard = () => {
  const { cryptoStats, cryptoCoins } = useSelector((state) => state.appReducer);

  return (
    <div className="AppBodyContainer">
      <h3 className="dashboardTitle">Latest Crypto News</h3>

      <div className="h-64 w-full mx-auto grid grid-cols-4 grid-rows-2 max-w-3xl gap-2">
        <div className="h-full relative row-span-2 col-span-2">
          <UpdateCard />
        </div>
        <div className="h-full relative col-span-2">
          <UpdateCard />
        </div>
        <div className="h-full relative">
          <UpdateCard id={4} />
        </div>
        <div className="h-full relative">
          <UpdateCard id={4} />
        </div>
      </div>

      <h3 className="dashboardTitle">Global Crypto Stats</h3>
      <div className="max-w-3xl grid grid-cols-5 gap-3 mx-auto">
        <StatsCard
          title="Total Crypto Currencies"
          num={cryptoStats?.totalCoins}
        />
        <StatsCard title="Total Exchanges" num={cryptoStats?.totalExchanges} />
        <StatsCard title="Total Market Cap" num={cryptoStats?.totalMarketCap} />
        <StatsCard title="Total 24h Volume" num={cryptoStats?.total24hVolume} />
        <StatsCard title="Total Markets" num={cryptoStats?.totalMarkets} />
      </div>

      <h3 className="dashboardTitle">Top 10 Crypto Currencies</h3>
      <div className="max-w-3xl grid grid-cols-3 gap-3 mx-auto">
        {cryptoCoins
          ?.filter((_, index) => index <= 10)
          ?.map((coin) => (
            <CoinCard
              name={coin?.name}
              price={coin?.price}
              icon={coin?.iconUrl}
              id={coin?.rank}
              dailyChange={coin?.change}
              marketCap={coin?.marketCap}
            />
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
