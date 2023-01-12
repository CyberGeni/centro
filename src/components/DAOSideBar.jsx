import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo-light.svg";
import "../App.css";
function DAOSideBar() {
  return (
    <div className="bg-[#131014] h-screen w-1/3 md:w-1/5 fixed inset-0">
      <div className="py-6 mb-8">
        <img className="mx-auto" src={Logo} alt="" />
      </div>
      <nav className="text-white flex flex-col my-2">
        <NavLink className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]">
          Description
        </NavLink>
        <NavLink className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]">
          Members
        </NavLink>
        <NavLink className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]">
          Proposals
        </NavLink>
        <NavLink className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]">
          Treasury
        </NavLink>
      </nav>
    </div>
  );
}

export default DAOSideBar;
