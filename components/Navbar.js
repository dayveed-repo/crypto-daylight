import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/reducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.appReducer);

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

      {isOpen ? (
        <AiOutlineClose
          onClick={() => handleSidebarToggle()}
          className="text-red-500 text-2xl cursor-pointer"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => handleSidebarToggle()}
          className="text-gray-300 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Navbar;
