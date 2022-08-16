import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { value } = useSelector((state) => state.appReducer);

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Yo</p>
      </div>
    </div>
  );
};

export default Home;
