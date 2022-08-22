import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CoinCard from "./CoinCard";
import StatsCard from "./StatsCard";
import UpdateCard from "./UpdateCard";

const DashBoard = () => {
  const { cryptoStats, cryptoCoins, cryptoNews } = useSelector(
    (state) => state.appReducer
  );

  const [newsCard, setnewsCard] = useState([]);

  useEffect(() => {
    if (!cryptoNews) return;
    let filtered = cryptoNews?.value
      ?.filter((news) => news.image)
      .filter((_, index) => index < 4);
    setnewsCard(filtered);
  }, [cryptoNews]);

  return (
    <div className="AppBodyContainer">
      <h3 className="dashboardTitle">Latest Crypto News</h3>

      {newsCard?.length && (
        <div className="h-auto md:h-72 w-full mx-auto grid grid-cols-2 grid-rows-2 max-w-3xl gap-4 sm:gap-8">
          <div className="h-full">
            <UpdateCard
              name={newsCard[0]?.name}
              linkUrl={newsCard[0]?.url}
              imgUrl={newsCard[0]?.image.thumbnail.contentUrl}
              desc={newsCard[0]?.description}
            />
          </div>

          <div className="h-full">
            <UpdateCard
              name={newsCard[1]?.name}
              linkUrl={newsCard[1]?.url}
              desc={newsCard[1]?.description}
              imgUrl={newsCard[1]?.image.thumbnail.contentUrl}
            />
          </div>

          <div className="h-full">
            <UpdateCard
              id={4}
              linkUrl={newsCard[2]?.url}
              desc={newsCard[2]?.description}
              name={newsCard[2]?.name}
              imgUrl={newsCard[2]?.image.thumbnail.contentUrl}
            />
          </div>

          <div className="h-full">
            <UpdateCard
              id={4}
              linkUrl={newsCard[3]?.url}
              name={newsCard[3]?.name}
              desc={newsCard[3]?.description}
              imgUrl={newsCard[3]?.image.thumbnail.contentUrl}
            />
          </div>
        </div>
      )}

      <h3 className="dashboardTitle">Global Crypto Stats</h3>
      <div className="max-w-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mx-auto">
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
      <div className="max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto">
        {cryptoCoins
          ?.filter((_, index) => index <= 10)
          ?.map((coin, i) => (
            <CoinCard
              key={i}
              name={coin?.name}
              uid={coin?.uuid}
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
