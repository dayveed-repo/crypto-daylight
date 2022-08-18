import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchParams, fetchUrl } from "../api";
import DashBoard from "../components/DashBoard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { assignCryptoCoins, assignCryptoStats } from "../redux/reducer";
import axios from "axios";

const Home = ({ stats, coins }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(assignCryptoStats(stats));
    dispatch(assignCryptoCoins(coins));
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
        <DashBoard />
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
  const res = await axios.get(fetchUrl("coins"), FetchParams());

  const data = await res.data;

  return {
    props: {
      stats: data?.data?.stats,
      coins: data?.data?.coins,
    },
  };
};

export default Home;
