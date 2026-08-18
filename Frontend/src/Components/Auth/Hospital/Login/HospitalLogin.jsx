import React from 'react'
import { FaArrowRight, FaHospital, FaHospitalAlt, FaLock } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const HospitalLogin = () => {
    const navigate = useNavigate()

    return (
        <section className="w-full max-w-md flex-1">
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-lg md:p-6">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-green-700"></div>

                {/* Heading */}
                <div className="mb-5 text-center lg:text-left">
                    <h2 className="mb-1 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
                        Admin Login
                    </h2>

                    <p className="text-sm leading-5 text-gray-600">
                        Create your institutional administrative account.
                    </p>
                </div>

                <form className="space-y-3">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="adminEmail"
                            className="mb-1 block text-sm font-semibold text-gray-900"
                        >
                            Administrator Email
                        </label>

                        <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                                <IoMail size={18} />
                            </span>

                            <input
                                type="email"
                                placeholder="admin@hospital.org"
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-2 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                            />
                        </div>
                        {/* {errors.email && <p className="text-green-700 font-semibold">{errors.email.message}</p>} */}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1 block text-sm font-semibold text-gray-900"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                                <FaLock size={18} />
                            </span>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                            />
                        </div>
                        {/* {errors.password && <p className="text-[#00450d] font-semibold">{errors.password.message}</p>} */}
                    </div>

                    {/* Button */}
                    <div className="flex flex-col gap-2 pt-3">
                        <button
                            type="submit"
                            className="w-full bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                            Register Institution

                            <span className="text-lg">
                                <FaArrowRight size={18} />
                            </span>
                        </button>

                        {/* Login */}
                        <div className="text-center mt-2">
                            <span className="text-sm text-gray-600">
                                Already registered?{" "}
                            </span>

                            <a
                                onClick={() => {
                                    navigate('/auth/hospital/register')
                                }}
                                className="font-semibold text-sm text-green-700 hover:underline inline-flex items-center justify-center gap-1"
                            >
                                Return to Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default HospitalLogin