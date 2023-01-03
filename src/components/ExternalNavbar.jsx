import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import Pattern from "../assets/icons/bg-pattern.svg";
import '../App.css'
function ExternalNavbar() {

  const [isActive, setActive] = useState(false)

  function handleClick() {  
    isActive ? setActive(false) : setActive(true)
    if (window.innerWidth > 768) {
      setActive(true)
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
    //   </div>
    // </header>
    <header 
      className="px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-4 z-50 fixed flex justify-between mx-auto list-none overflow-hidden w-full">
        <img src={Logo} alt="" />
        
        <div className=
          {isActive ? "top-0 right-[25vw] md:left-unset transition-all flex flex-col md:flex-row justify-center w-[75vw] md:w-auto h-screen md:h-fit space-y-4 md:space-y-0 fixed md:relative bg-[#141115] text-[#FFE6C3]" : "transition-all right-[100vw] absolute md:relative md:flex md:justify-between w-full md:left-0 md:text-lg md:my-2"}>
          <nav className="font-[Manrope] space-y-7 md:w-full md:space-y-0 flex flex-col md:flex-row md:items-center md:justify-center px-10 md:py-3 md:px-0 md:space-x-5">
           <Link>Home</Link>
           <Link>How it works</Link>
           <Link>FAQs</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
         <button className="w-full -z-10 button button--aylen px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative rounded-md text-sm font-medium overflow-hidden">
           Connect your wallet
         </button>
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
