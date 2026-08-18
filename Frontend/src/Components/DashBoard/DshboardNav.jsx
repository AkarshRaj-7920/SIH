import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'

const DshboardNav = () => {
    return (
        <header className='flex justify-between items-center h-20 px-6 z-40 backdrop-blur-md fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] border-b border-gray-300/90 bg-white p-2'>
            <div className='flex items-center flex-1 max-w-[40%]'>
                {/* Search */}
                <div className='relative w-full group'>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm transition-colors group-focus-within:text-green-700">
                        <FaSearch size={18} />
                    </span>

                    <input
                        type="text"
                        placeholder="Search patients, records, or staff..."
                        className="w-full bg-gray-200/70 border-none rounded-xl py-2 pl-10 pr-4 text-base focus:ring-2 focus:ring-green-700/20 transition-all placeholder:text-gray-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                    <span className="text-2xl">
                        <IoIosHelpCircleOutline size={25}/>
                    </span>
                </button>

                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600 relative">
                    <span className="text-2xl">
                        <IoNotifications size={22} />
                    </span>

                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-300/30 mx-2"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-base text-gray-900 leading-none">
                            Admin User
                        </p>

                        <p className="font-medium text-xs text-gray-600">
                            Super Admin
                        </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-green-100 font-bold">
                        AD
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DshboardNav