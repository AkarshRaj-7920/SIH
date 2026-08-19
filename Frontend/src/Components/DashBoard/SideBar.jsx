import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdDashboard, MdEmergency, MdOutlineLocalHospital } from "react-icons/md";
import Logo from '../../assets/imgs/Logo.png'

const SideBar = () => {
    return (
        <aside className='hidden md:flex flex-col h-screen py-2 pb-5 px-3 fixed left-0 top-0 w-64 border-r border-slate-200 z-50 bg-white cursor-default'>
            {/* Logo */}
            <div className='relative mb-4'>
                <img src={Logo} alt="" className='w-full h-20' />
                <p className='absolute bottom-1.5 right-1/6 text-xs text-blue-700 font-bold uppercase tracking-[0.35em]'>dashboard</p>
            </div>

            <nav className='flex-1 space-y-1'>
                <a
                    className="group flex w-full items-center gap-3 rounded-xl px-4 py-1.5 bg-cyan-50 text-sky-600 transition-all duration-200 hover:bg-cyan-100 active:scale-[0.98]">
                    {/* Icon */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-sky-600 shadow-sm transition-all duration-200 group-hover:bg-white"
                    >
                        <MdDashboard size={21} />
                    </span>

                    {/* Label */}
                    <span className="font-semibold tracking-wide">
                        Dashboard
                    </span>

                    {/* Active indicator */}
                    <span className="ml-auto h-2 w-2 rounded-full bg-sky-500" />
                </a>

                <a
                    className="group flex w-full items-center gap-3 rounded-xl px-4 py-1.5 text-slate-500 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]">
                    {/* Icon */}
                    <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-white group-hover:text-slate-700">
                        <FaDatabase size={18} />
                    </span>

                    {/* Label */}
                    <span className="font-medium">
                        Data Management
                    </span>
                </a>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
                <button className="w-full py-3 px-4 bg-rose-600 text-white rounded-xl font-bold text-sm hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
                    <span className="text-2xl"><MdEmergency size={18} /></span>
                    Emergency Alert
                </button>

                <div className="border-t border-slate-200 space-y-1">
                    <a
                        className="group flex w-full items-center gap-2 rounded-xl px-4 py-1.5 text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]">
                        <span className=" flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-white group-hover:text-slate-700"
                        >
                            <IoIosSettings size={20} />
                        </span>

                        <span className="text-sm font-medium">
                            Settings
                        </span>
                    </a>

                    {/* Logout */}
                    <button
                        type="button"
                        className=" group flex w-full items-center gap-2 rounded-xl px-4 py-1.5 text-slate-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-[0.98]">
                        <span
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-red-100 group-hover:text-red-600">
                            <CiLogout size={20} />
                        </span>

                        <span className="text-sm font-medium">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default SideBar