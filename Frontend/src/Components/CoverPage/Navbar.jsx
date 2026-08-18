import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 mx-4 mt-3 flex h-14 items-center justify-between rounded-xl border border-gray-200/80 bg-white/85 px-4 shadow-md backdrop-blur-md md:mx-10 md:px-6">
            <div className="flex items-center gap-8">
                <a
                    className="text-xl font-semibold tracking-tight text-cyan-500 md:text-2xl"
                    href="#"
                >
                    Vitality Pulse
                </a>

            </div>

            <div className="hidden md:flex items-center gap-4">
                <button
                    type="button"
                    className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-500 transition-colors hover:bg-green-50 hover:scale-95 active:scale-90"
                >
                    Login
                </button>
                <button
                    type="button"
                    className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 hover:scale-95 active:scale-90"
                >
                    Sign Up
                </button>
            </div>

            <button type="button" aria-label="Open menu" className="text-green-700 md:hidden">
                <span
                    className="text-2xl"
                >
                    menu
                </span>
            </button>
        </nav>
    )
}

export default Navbar