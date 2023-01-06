import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <div className="grid grid-cols-4 text-white">
        <SideBar />
        <div className="bg-[#0D0B0E] w-full col-span-3">
            <DashboardHeader />
            <Outlet />
        </div>
        
    </div>
  )
}

export default Dashboard