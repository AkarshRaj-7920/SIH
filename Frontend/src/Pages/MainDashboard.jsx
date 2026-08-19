import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/DashBoard/SideBar'
import DshboardNav from '../Components/DashBoard/DshboardNav'

const MainDashboard = () => {
  return (
    <div className='bg-[#f4f7f6] text-slate-900 min-h-screen flex antialiased'>
      {/* SideBar */}
      <SideBar />

      <main className='flex-1 md:ml-64 flex flex-col max-h-screen'>
        <DshboardNav />

        <Outlet />
      </main>
    </div>
  )
}

export default MainDashboard