import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <div className="grid grid-cols-3">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Dashboard