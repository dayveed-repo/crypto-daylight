import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiBlockchaindotcom } from "react-icons/si";
import { RiExchangeFundsFill } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";

const Sidebar = () => {
  const router = useRouter();

  const checkSelected = () => {
    if (router.asPath === "/") {
      return 1;
    } else if (router.asPath === "/cryptoCurrency") {
      return 2;
    } else if (router.asPath === "/exchanges") {
      return 3;
    } else if (router.asPath === "/news") {
      return 4;
    } else {
      return;
    }
  };

  return (
    <div className="hidden lg:inline px-3 py-6 bg-gray-700 h-screen w-2/6 sm:w-1/6">
      <div className="flex items-center text-cyan-500 font-semibold text-xl">
        <h3>Crypto</h3>
        <img className="w-14 h-14" src="/crypto-logo.png" alt="app logo" />
        <h3>Daylight</h3>
      </div>

      <div className="mt-10 space-y-3">
        <div
          className={`sidebarLink ${checkSelected() === 1 && "selected"}`}
          onClick={() => router.push("/")}
        >
          <AiOutlineHome />
          <p>Home</p>
        </div>

        <div
          className={`sidebarLink ${checkSelected() === 2 && "selected"}`}
          onClick={() => router.push("/", "/cryptoCurrency", { shallow: true })}
        >
          <SiBlockchaindotcom />
          <p>Crypto Currencies</p>
        </div>
        <div
          className={`sidebarLink ${checkSelected() === 3 && "selected"}`}
          onClick={() => router.push("/", "/exchanges", { shallow: true })}
        >
          <RiExchangeFundsFill />
          <p>Exchanges</p>
        </div>
        <div
          className={`sidebarLink ${checkSelected() === 4 && "selected"}`}
          onClick={() => router.push("/", "/news", { shallow: true })}
        >
          <HiOutlineNewspaper />
          <p>News</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
