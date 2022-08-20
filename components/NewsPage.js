import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import UpdateCard from "./UpdateCard";
import axios from "axios";
import { fetchNewsApiParams, fetchNewsEndpoint } from "../api";

const NewsPage = () => {
  //   const { cryptoNews } = useSelector((state) => state.appReducer);

  const [selected, setselected] = useState("Crypto");
  const [newsSearch, setnewsSearch] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setloading(true);

      const newsRes = await axios.get(
        fetchNewsEndpoint(selected),
        fetchNewsApiParams()
      );
      const newsData = await newsRes.data;
      setnewsSearch(newsData);

      setloading(false);
    };

    fetchNews();
  }, [selected]);

  return (
    <div className="AppBodyContainer">
      <div className="max-w-3xl flex items-center mx-auto">
        <h2 className="flex-grow mr-5 text-xl text-gray-300 font-semibold">
          Top Latest Crypto News
        </h2>

        <select
          className="px-3 py-1 outline-none bg-slate-600 shadow-lg text-gray-300 cursor-pointer"
          value={selected}
          onChange={(e) => setselected(e.target.value)}
        >
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Crypto">Crypto</option>
          <option value="NFT">NFTs</option>
        </select>
      </div>

      {loading ? (
        <h3 className="text-center text-gray-400 font-semibold mt-12">
          loading...
        </h3>
      ) : (
        <div className="grid grid-cols-3 max-w-4xl mx-auto gap-8 mt-10">
          {newsSearch.value.map((news) => (
            <UpdateCard
              name={news?.name}
              linkUrl={news?.url}
              imgUrl={news?.image?.thumbnail.contentUrl}
              desc={news?.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
