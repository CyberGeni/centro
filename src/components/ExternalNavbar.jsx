import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";

function ExternalNavbar() {
  return (
    <header className="font-[Manrope] flex justify-between items-center w-full bg-[#FFE6C3] px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8">
      <div className="flex space-x-1">
        <img src={Logo} alt="" />
        <h1 className="font-bold font-Aeonik text-2xl">Centro</h1>
      </div>
      <nav className="hidden md:flex bg-[#FFE6C3] sm:space-x-3 text-gray-700">
        <Link>Home</Link>
        <Link>How it works</Link>
        <Link>FAQs</Link>
      </nav>
      <div className="flex items-center space-x-3">
        <button className="bg-[#141115] text-[#FFE6C3] font-[Manrope] text-sm rounded px-4 py-3">
          Connect your wallet
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="md:hidden"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
      </div>
    </header>
  );
}

export default ExternalNavbar;
