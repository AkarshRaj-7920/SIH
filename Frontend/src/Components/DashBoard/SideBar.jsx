import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdDashboard, MdEmergency, MdOutlineLocalHospital } from "react-icons/md";

const SideBar = () => {
    return (
        <aside className='hidden md:flex flex-col h-screen py-4 px-2 backdrop-blur-xl fixed left-0 top-0 w-64 border-r border-gray-600/20 z-50 bg-white'>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8 px-2">
                <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center shadow-sm">
                    <span className="text-white text-2xl flex justify-center items-center">
                        <MdOutlineLocalHospital size={28} />
                    </span>
                </div>

                <div>
                    <h1 className="font-bold text-2xl text-green-700">
                        Vitality Pulse
                    </h1>

                    <p className="font-medium text-xs text-gray-600">
                        SIH Portal
                    </p>
                </div>
            </div>

            <nav className='flex-1 space-y-2'>
                <a
                    className="flex items-center gap-3 px-4 py-3 bg-green-50 text-green-700 rounded-xl font-bold transition-all"
                >
                    <span
                        className="text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        <MdDashboard size={23} />
                    </span>

                    <span className="font-label-lg text-label-lg">Dashboard</span>
                </a>

                <a
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                >
                    <span className="material-symbols-outlined">
                        <FaDatabase size={18} />
                    </span>

                    <span className="font-label-lg text-label-lg">Data Management</span>
                </a>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
                <button className="w-full py-3 px-4 bg-green-700 text-white rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-green-700/20">
                    <span className="text-2xl"><MdEmergency size={18} /></span>
                    Emergency Alert
                </button>

                <div className="pt-4 border-t border-gray-400/70 space-y-2">
                    <a
                        className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        <span className="text-2xl"><IoIosSettings size={20} /></span>

                        <span className="text-base">Settings</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        <span className="text-2xl"><CiLogout size={20} /></span>

                        <span className="text-base">Logout</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default SideBar