import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import daos from "../db/dao.js";
function DAOHeader() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const dao = daos.filter((dao) => dao.name === id)[0];
  console.log(dao);

  return (
    <div className="right-0 top-0 flex justify-between items-center border-b border-b-[#1C1917] py-6 px-6 fixed bg-[#0D0B0E] w-2/3 md:w-4/5 ">
      <div className="flex items-center space-x-4 text-white">
        <Link>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate(-1)}
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <img src={dao.image} className="w-9" alt="" />
        <h2 className="text-xl font-medium font-Aeonik">{dao.name}</h2>
      </div>

      <div className="w-fit flex items-center space-x-2 px-2 py-1 text-[#A9A29D] font-[Manrope] bg-[#131014] border border-[#1C1917] placeholder:text-[#79716B] rounded-lg h-fit">
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

export default DAOHeader;
