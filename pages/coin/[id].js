import React, { useEffect, useState } from "react";
import { FetchParams, fetchUrl } from "../../api";
import axios from "axios";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import millify from "millify";
import CoinInfo from "../../components/CoinInfo";
import HTMLReactParser from "html-react-parser";
import CoinChart from "../../components/CoinChart";
import { useRouter } from "next/router";

const CoinPage = ({ coin, coinHistory }) => {
  const [selected, setselected] = useState("7d");
  const [historySelect, sethistorySelect] = useState(coinHistory);

  const router = useRouter();

  useEffect(() => {
    const fetchHistory = async () => {
      const coinHistoryRes = await axios.get(
        fetchUrl("coin/" + router.query.id + "/history/"),
        FetchParams(selected)
      );

      const coinHisData = await coinHistoryRes.data;

      sethistorySelect(coinHisData.data);
    };

    fetchHistory();
  }, [selected]);

  return (
    <div className="flex min-h-screen relative w-screen bg-gradient-to-br from-gray-800 to-stone-700">
      <Head>
        <title>Crypto Daylight | ({coin.name})</title>
        <link rel="icon" href={coin.iconUrl || "/favicon.ico"} />
      </Head>

      <Sidebar />

      <main className="flex flex-col flex-grow">
        <Navbar />

        <div className="AppBodyContainer">
          <div className="mx-auto max-w-4xl space-y-2">
            <h4 className="text-gray-400 bg-slate-600 px-3 py-1 w-max">
              Ranking #{coin?.rank}
            </h4>

            <div className="flex items-center space-x-2">
              <img
                src={coin?.iconUrl}
                alt={coin.name + "icon"}
                className="w-14 h-14 object-contain"
              />
              <h2 className="text-gray-300 text-bold text-2xl">{coin?.name}</h2>
              <h4 className="font-normal text-xl text-gray-500">
                ({coin?.symbol})
              </h4>
            </div>

            <div className="text-3xl flex items-center space-x-3 text-gray-400 font-semibold">
              <p className="text-base text-gray-500">price in USD</p>
              <p>${millify(coin?.price)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 mx-auto max-w-4xl mt-8 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-400 mb-5">
                Bitcoin value Statistics
              </h3>
              <div>
                <CoinInfo name={"Price in Usd"} value={coin?.price} />
                <CoinInfo name={"Rank"} value={"#" + coin?.rank} />
                <CoinInfo name={"24h Volume"} value={coin["24hVolume"]} />
                <CoinInfo name={"Market Cap"} value={coin?.marketCap} />
                <CoinInfo
                  name={"All Time High"}
                  value={coin.allTimeHigh.price}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 mb-5">
                Other Information on Bitcoin
              </h3>
              <div>
                <CoinInfo
                  id={2}
                  name={"Number of Markets"}
                  value={coin?.numberOfMarkets}
                />
                <CoinInfo
                  id={2}
                  name={"Number of Exchanges"}
                  value={coin?.numberOfExchanges}
                />
                <CoinInfo
                  id={2}
                  name={"Approved Supply"}
                  value={coin?.supply?.confirmed ? "true" : "false"}
                />
                <CoinInfo
                  id={2}
                  name={"Total Supply"}
                  value={coin?.supply.total}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-5 mx-auto max-w-4xl mt-10">
            <select
              className="px-3 py-1 outline-none bg-slate-600 shadow-lg text-gray-300 cursor-pointer"
              value={selected}
              onChange={(e) => setselected(e.target.value)}
            >
              <option value="24h">1d</option>
              <option value="7d">7d</option>
              <option value="30d">1M</option>
              <option value="1y">1Y</option>
            </select>

            <h3 className="capitalize text-gray-300 text-xl">
              {coin?.name} Price Chart
            </h3>
          </div>

          <CoinChart
            coinName={coin?.name}
            currentPrice={millify(coin?.price)}
            coinHistory={historySelect}
          />

          <div className="mx-auto max-w-4xl mt-10 text-gray-400 text-sm coinDesc">
            <h4 className="text-gray-300 mt-10 mb-5 text-lg">
              What is {coin?.name}
            </h4>
            {HTMLReactParser(coin?.description)}
          </div>

          <div className="mx-auto max-w-4xl mt-10 text-gray-400 text-sm">
            <h4 className="text-gray-300 mt-10 mb-5 text-lg">
              {coin?.name} Links
            </h4>

            {coin?.links.map((link, i) => (
              <div
                key={i}
                className="grid grid-cols-2 py-3 border-b md:w-2/3 border-gray-600"
              >
                <h3>{link.name}</h3>
                <a
                  href={link.url}
                  className="text-blue-500 w-16"
                  target="_blank"
                >
                  {link.url.slice(0, 30) + "..."}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    fetchUrl("coin/" + context.params.id),
    FetchParams()
  );

  const coinHistoryRes = await axios.get(
    fetchUrl("coin/" + context.params.id + "/history/"),
    FetchParams("7d")
  );

  const data = await res.data;
  const coinHisData = await coinHistoryRes.data;

  return {
    props: {
      coin: data?.data?.coin,
      coinHistory: coinHisData?.data,
    },
  };
};

export default CoinPage;
