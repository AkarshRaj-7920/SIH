import React from 'react'
import { FaArrowRight, FaPlusSquare, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate()

    return (
        <header className="mx-auto flex h-screen max-w-7xl items-center overflow-hidden px-4 pb-4 pt-24 md:px-10">
            <div className="grid w-full grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col gap-3 lg:pr-8">
                    <span className="w-max rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                        Smart Healthcare Platform
                    </span>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-sky-500 md:text-5xl">
                        Know Your Hospital Before You Go
                    </h1>
                    <p className="max-w-xl text-base leading-6 text-gray-600 md:text-lg">
                        Access real-time information on patient loads, bed availability,
                        and emergency room status to make informed healthcare decisions
                        instantly.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-3 md:gap-4 lg:pt-5">
                        {/* Find Hospital */}
                        <div className='group flex cursor-pointer flex-1 flex-col justify-between rounded-xl border-t-2 border-teal-600 bg-white p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 md:p-5'>
                            <div className="mb-3 flex items-center justify-between">
                                <div className='rounded-lg bg-teal-100 p-2.5 text-teal-700'>
                                    <FaPlusSquare size={20} />
                                </div>

                                <span className='text-gray-400 group-hover:text-green-700 transition-colors'>
                                    <FaArrowRight size={20} />
                                </span>
                            </div>

                            <div>
                                <h2 className='mb-1 text-base font-semibold leading-tight text-green-700 md:text-lg'>
                                    Find a Hospital
                                </h2>

                                <p className='font-normal text-sm text-gray-600'>
                                    Check live availability near you
                                </p>
                            </div>
                        </div>

                        {/* Hospital Admin */}
                        <div
                            onClick={() => {
                                navigate('/auth/hospital/login')
                            }}
                            className='group flex cursor-pointer flex-1 flex-col justify-between rounded-xl bg-slate-100 p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 md:p-5'>
                            <div className="mb-3 flex items-center justify-between">
                                <div className='rounded-lg bg-gray-300/70 p-2.5 text-gray-600'>
                                    <FaShieldAlt size={20} />
                                </div>

                                <span className='text-gray-400 group-hover:text-green-700 transition-colors'>
                                    <FaArrowRight size={20} />
                                </span>
                            </div>

                            <div>
                                <h2 className='mb-1 text-base font-semibold leading-tight text-gray-700 md:text-lg'>
                                    Hospital Admin
                                </h2>

                                <p className='font-normal text-sm text-gray-600'>
                                    Update Faculty data Instanly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-first relative h-40 w-full overflow-hidden rounded-3xl shadow-lg lg:order-last lg:h-[min(68vh,30rem)] lg:rounded-[2.5rem]">
                    <div
                        className="absolute inset-0 bg-cover bg-center w-full h-full"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8kuheetla-v2kkgnoq_4FfSFFi2JBlZvLa7DGwOFCzbs18EDcJ5KfBHZxvmNnbsjLhfwD0OVMbCxv2Mec-4tTlFPAEbe9u5hqq8isPOuhtMIe6K_hyA-DYKbmsxFHP7eGWPD_3_I2aKfWS-5P9u9ZeSwZlspi6LVZDD2KmcZxv9zkCTddOA45i5XXuWXvhS8LPjgHj7NTCxNmOEHDcarCnKXYUWt1pFCcLmj3liEUGImRSPvfJo1sSg')",
                        }}
                        role="img"
                        aria-label="Modern hospital lobby atrium with natural light and greenery"
                    />
                </div>
            </div>
        </header>
    )
}

export default HeroSection