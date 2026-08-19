import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 mx-4 mt-3 flex h-14 items-center justify-center rounded-xl border border-gray-200/80 bg-white/85 px-4 shadow-md backdrop-blur-md md:mx-10 md:px-6">
            <div className="flex items-center gap-8">
                <div className="text-xl font-semibold tracking-tight text-cyan-500 md:text-3xl">
                    Smart Care
                </div>

            </div>
        </nav>
    )
}

export default Navbar