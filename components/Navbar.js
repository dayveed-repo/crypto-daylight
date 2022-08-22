import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/reducer";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="h-[10vh] w-full flex items-center justify-between lg:hidden px-3">
      <div className="flex items-center text-cyan-500 font-semibold text-sm">
        <h3>Crypto</h3>
        <img className="w-10 h-10" src="/crypto-logo.png" alt="app logo" />
        <h3>Daylight</h3>
      </div>

      <AiOutlineMenu
        onClick={() => handleSidebarToggle()}
        className="text-gray-300 text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
