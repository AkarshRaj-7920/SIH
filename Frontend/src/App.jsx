import React from 'react'
import CoverPage from './Pages/CoverPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import Authentication from './Pages/Authentication'
import HospitalAuth from './Components/Auth/Hospital/HospitalAuth'
import HospitalLogin from './Components/Auth/Hospital/Login/HospitalLogin'
import HospitalRegister from './Components/Auth/Hospital/Register/HospitalRegister'
import MainDashboard from './Pages/MainDashboard'
import DashboardHome from './Components/DashBoard/Home/DashboardHome'

const App = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col antialiased">
      <Routes>
        {/* Main Cover Page */}
        <Route path='/' element={<CoverPage />} />

        {/* Authentication */}
        <Route path="/auth" element={<Authentication />}>
          <Route index element={<Navigate to="hospital" replace />} />

          <Route path="hospital" element={<HospitalAuth />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<HospitalLogin />} />
            <Route path="register" element={<HospitalRegister />} />
          </Route>
        </Route>

        {/* Admin Dashboard */}
        <Route path='/dshbrd' element={<MainDashboard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path='home' element={<DashboardHome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App