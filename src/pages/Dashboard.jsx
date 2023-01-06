import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <div className="relative flex text-white bg-[#0D0B0E] min-h-screen overflow-x-hidden ">
        <SideBar />
        <div className="bg-[#0D0B0E] w-3/4 md:w-4/5 ml-auto space-y-20">
            <DashboardHeader />
            <Outlet />
        </div>
        
    </div>
  )
}

export default Dashboard