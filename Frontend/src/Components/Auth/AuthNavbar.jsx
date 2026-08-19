import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AuthNavbar = () => {
    const navigate = useNavigate()

    return (
        <nav className="absolute inset-x-0 top-2 z-50 mx-4 flex h-16 items-center justify-between rounded-xl border border-gray-200/80 bg-white/85 px-4 shadow-md backdrop-blur-md md:mx-10 md:px-6">
            <button
                type="button"
                onClick={() => {
                    navigate(-1)
                }}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-800 cursor-pointer"
            >
                <FaArrowLeft aria-hidden="true" />
                <span className='hidden md:block'>Back</span>
            </button>

            <a
                onClick={() => {
                    navigate('/')
                }}
                className="font-semibold text-xl tracking-tight text-green-800 md:text-2xl cursor-pointer"
            >
                Smart Care
            </a>

            <span className="w-16 md:w-20" aria-hidden="true" />
        </nav>
    )
}

export default AuthNavbar