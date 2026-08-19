import React, { useEffect, useRef, useState } from 'react'
import { FaBell, FaSearch, FaUser } from 'react-icons/fa'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { RiGeminiFill } from "react-icons/ri";
import { IoNotifications } from 'react-icons/io5'
import NotificationDropdown from './Home/NotificationDropdown';

const DshboardNav = () => {

    const [isNotificationOpen, setisNotificationOpen] = useState(false)
    const notificationRef = useRef(null)
    
    // Notification Click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setisNotificationOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])


    return (
        <header className='flex justify-between items-center h-20 px-4 sm:px-6 z-40 fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] border-b border-slate-200 bg-white/90 backdrop-blur-md cursor-default'>
            <div className='flex items-center flex-1 max-w-120'>
                {/* Search */}
                <div className='relative w-full group'>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm transition-colors group-focus-within:text-emerald-700">
                        <FaSearch size={18} />
                    </span>

                    <input
                        type="text"
                        placeholder="Search patients, records, or staff..."
                        className="w-full bg-slate-100 border border-transparent rounded-xl py-2.5 pl-10 pr-4 text-sm outline-0 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-700/10 transition-all placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button aria-label="Help" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-all duration-300">
                    <span className="text-2xl">
                        <RiGeminiFill size={22} />
                    </span>
                </button>

                {/* Notifications */}
                <NotificationDropdown isNotificationOpen={isNotificationOpen} setisNotificationOpen={setisNotificationOpen} notificationRef={notificationRef} />

                <div className="h-8 w-px bg-gray-300/30 mx-2"></div>

                <div className="flex items-center gap-3 pl-2 py-1 px-2.5 rounded-2xl hover:bg-slate-100 transition-all duration-200">
                    <div className="text-right hidden sm:block">
                        <p className="text-base text-gray-900 leading-none">
                            Admin User
                        </p>

                        <p className="font-medium text-xs text-gray-600">
                            Super Admin
                        </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-emerald-200 font-bold text-sm">
                        AD
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DshboardNav