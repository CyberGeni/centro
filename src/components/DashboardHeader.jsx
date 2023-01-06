import React from "react";

function DashboardHeader() {
  return (
    <div className="flex justify-between items-center border-b border-b-[#1C1917] py-4 px-6 fixed bg-[#0D0B0E] w-3/4">
      <div className="flex flex-col text-white">
        <h2 className="text-xl font-medium font-Aeonik">DAOs</h2>
        <span className="font-[Manrope] text-white/60 text-sm">
          These are a list of DAOs you can join
        </span>
      </div>
      <div className="flex items-center space-x-2 px-2 py-1 bg-[#131014] border border-[#1C1917] placeholder:text-[#79716B] rounded-lg h-fit">
        <svg
          width="15"
          height="15"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
            stroke="#A9A29D"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          className="bg-[#131014] focus:outline-none placeholder:text-[#79716B] placeholder:font-[Manrope] placeholder:text-sm"
          type="search"
          name=""
          id=""
          placeholder="Search DAO"
        />
      </div>
      <div className="flex items-center space-x-2 px-2 py-1 text-[#A9A29D] font-[Manrope] bg-[#131014] border border-[#1C1917] placeholder:text-[#79716B] rounded-lg h-fit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_293_11891)" />
          <defs>
            <linearGradient
              id="paint0_linear_293_11891"
              x1="13.4689"
              y1="-23.3913"
              x2="47.9009"
              y2="20.331"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7F3AD8" />
              <stop offset="1" stop-color="#9A1E1E" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-sm">cybergenie.eth</span>
      </div>
    </div>
  );
}

export default DashboardHeader;
