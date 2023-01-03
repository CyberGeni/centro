import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectWalletButton from "./ConnectWalletButton";
import Logo from "../assets/icons/logo.svg";
import Pattern from "../assets/icons/bg-pattern.svg";
import "../App.css";

function ExternalNavbar() {
  const [isActive, setActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleClick() {
    isActive ? setActive(false) : setActive(true);
    console.log('clicked')
    if (window.innerWidth > 768) {
      setActive(true);
    }
  }

  return (
    // <header
    //   style={{ backgroundImage:`url(${Pattern})` }}
    //   className="bg-blend-multiply font-[Manrope] flex justify-between items-center w-full bg-[#FFE6C3] px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-4 sm:py-6 md:py-8 h-fit"
    // >
    //   <img src={Logo} alt="" />
    //   <div>
    //     <nav className="space-x-0 md:space-x-4">
    //       <Link>Home</Link>
    //       <Link>How it works</Link>
    //       <Link>FAQs</Link>
    //     </nav>
    //   </div>

    //   <div className="flex items-center space-x-6">
    //     <button className="button button--aylen px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative rounded-md text-sm font-medium overflow-hidden">
    //       Connect your wallet
    //     </button>
    //     <svg
    //       onClick={handleClick}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       width="24"
    //       height="24"
    //       className="md:hidden"
    //     >
    //       <path fill="none" d="M0 0h24v24H0z" />
    //       <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
    //     </svg>
    //   </div>  ${visible ? 'top-0' : ''}
    // </header>
    <header
      style={{ backgroundImage: `url(${Pattern})` }}
      className={`bg-blend-multiply transition-all px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-4 z-10 sticky flex justify-between mx-auto list-none overflow-hidden w-full
        ${isActive ? " bg-[#FFE6C3]" : "backdrop-blur-md"}
        ${
          visible
            ? "top-0 bg-[#FFE6C3]/20 transition-all"
            : "data-aos fade-down"
        }
        `}
    >
      <img src={Logo} alt="" />

      <div
        className={
          isActive
            ? "top-0 right-[25vw] z-[1000000] md:left-unset transition-all flex flex-col md:flex-row justify-center w-[75vw] md:w-auto h-screen md:h-fit space-y-4 md:space-y-0 fixed md:relative bg-[#0c0b0c] md:bg-transparent text-[#FFE6C3] md:text-[#141115] md:right-[unset] md:space-x-4 md:items-center md:mx-auto md:justify-center"
            : "transition-all right-[100vw] absolute md:relative md:flex md:justify-between w-full md:left-0 md:text-lg md:my-2"
        }
      >
        <nav className="font-[Manrope] space-y-2 md:w-full md:space-y-0 flex flex-col md:flex-row md:items-center md:justify-center md:py-3 md:px-0 md:space-x-5">
          <Link className="hover:bg-stone-600/30 pl-12 md:pl-0 py-5 md:py-0 hover:border-r-8 hover:border-r-[#FFE6C3] transition-all">
            Home
          </Link>
          <Link className="hover:bg-stone-600/30 pl-12 md:pl-0 py-5 md:py-0 hover:border-r-8 hover:border-r-[#FFE6C3] transition-all">
            How it works
          </Link>
          <Link className="hover:bg-stone-600/30 pl-12 md:pl-0 py-5 md:py-0 hover:border-r-8 hover:border-r-[#FFE6C3] transition-all">
            FAQs
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <ConnectWalletButton />
        <svg
          onClick={handleClick}
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
