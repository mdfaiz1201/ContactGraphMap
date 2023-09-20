import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import '../App.css'

const MainDashboard = () => {
  return (
   <div className="flex md:flex-row flex-col">
      <nav className="w-auto m-auto md:m-0 md:w-40 flex md:flex-col font-semibold border-r border-gray-300 gap-4">
         <NavLink className="nav border md:border-r-0 p-4" to="/">
            Contact
         </NavLink>
         <NavLink to="/chartsAndMaps" className="nav border md:border-r-0 p-4">
            Charts and Maps
         </NavLink>
      </nav>
      <div className="md:flex-1 min-h-screen text-center py-12">
         <Outlet/>
      </div>
   </div>
  )
}

export default MainDashboard