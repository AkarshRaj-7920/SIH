import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/CoverPage/Navbar'
import AuthNavbar from '../Components/Auth/AuthNavbar'

const Authentication = () => {
  return (
    <div className="bg-white text-gray-900 font-sans text-base antialiased selection:bg-green-600 selection:text-white min-h-screen cursor-default">
      <AuthNavbar />
      <Outlet />
    </div>
  )
}

export default Authentication