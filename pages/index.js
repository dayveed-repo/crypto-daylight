import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchNewsApiParams,
  fetchNewsEndpoint,
  FetchParams,
  fetchUrl,
} from "../api";
import DashBoard from "../components/DashBoard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  assignCryptoCoins,
  assignCryptoStats,
  getNews,
} from "../redux/reducer";
import axios from "axios";
import { useRouter } from "next/router";
import CryptoCurrency from "../components/CryptoCurrency";
import NewsPage from "../components/NewsPage";

const Home = ({ stats, coins, news }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(assignCryptoStats(stats));
    dispatch(assignCryptoCoins(coins));
    dispatch(getNews(news));
  }, []);

  return (
    <div className="flex min-h-screen w-screen bg-gradient-to-br from-gray-800 to-stone-700">
      <Head>
        <title>Crypto Daylight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="flex flex-col flex-grow">
        <Navbar />
        {router.asPath === "/cryptoCurrency" ? (
          <CryptoCurrency />
        ) : router.asPath === "/news" ? (
          <NewsPage />
        ) : (
          <DashBoard />
        )}
      </main>
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const res = await axios.get(fetchUrl("coins"), FetchParams());

//     const data = await res.data;

//     store.dispatch(assignCryptoStats(data?.data?.stats));
//   }
// );

export const getServerSideProps = async () => {
  const res = await axios.get(fetchUrl("coins?limit=100"), FetchParams());

  const data = await res.data;

  // const newsRes = await axios.get(
  //   fetchNewsEndpoint("Crypto"),
  //   fetchNewsApiParams()
  // );
  // const newsData = await newsRes.data;

  return {
    props: {
      stats: data?.data?.stats,
      coins: data?.data?.coins,
      news: [],
    },
  };
};

export default Home;
