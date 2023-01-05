import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/investments">Investments</Link>
        <Link to="/dashboard/products">Products</Link>
        <Link to="/dashboard/clubs">Clubs</Link>
        <Link to="/dashboard/all">DAOs</Link>

        <Outlet />
    </div>
  )
}

export default Dashboard