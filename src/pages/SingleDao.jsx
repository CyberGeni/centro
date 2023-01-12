import React from "react";
import { useParams, Outlet } from "react-router-dom";
import DAOHeader from "../components/DAOHeader";
import DAOSideBar from "../components/DAOSideBar";
function SingleDao() {
  const { id } = useParams();
  return (
    <div className="relative inset-0 flex text-white bg-[#0D0B0E] min-h-screen overflow-x-hidden ">
      <DAOSideBar  />
      <div className="bg-[#0D0B0E] w-2/3 md:w-4/5 ml-auto space-y-40 md:space-y-20">
        <DAOHeader />
        {id}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default SingleDao;
