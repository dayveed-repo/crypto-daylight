import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashBoard from "../components/DashBoard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { value } = useSelector((state) => state.appReducer);

  useEffect(() => {
    console.log(value);
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

export default Home;
