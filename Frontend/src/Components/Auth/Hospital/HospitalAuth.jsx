import React from 'react'
import { FaArrowRight, FaHospital, FaHospitalAlt, FaLock } from 'react-icons/fa';
import { Outlet } from 'react-router-dom'

const HospitalAuth = () => {
    return (
        <div className='flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 font-sans text-gray-900 antialiased'>
            <main className='mx-auto flex h-screen w-full max-w-7xl items-center justify-center gap-8 px-4 pb-4 pt-20 md:px-10 lg:gap-14'>
                {/* Branding Section */}
                <section className='hidden max-w-lg flex-1 flex-col justify-center lg:flex'>
                    <div className="mb-5">
                        <span
                            className="text-5xl text-green-700 mb-2 block"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            <FaHospitalAlt size={20} />
                        </span>

                        <h1 className="mb-3 text-4xl font-bold leading-tight text-green-800">
                            Vitality Pulse
                        </h1>

                        <p className="text-base leading-6 text-[#41493e]">
                            Clinical Precision Healthcare. Register your institution to
                            integrate with our advanced diagnostic network and streamline
                            patient care protocols.
                        </p>
                    </div>

                    <div className="relative h-56 w-full overflow-hidden rounded-xl border border-gray-300 shadow-md">
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgHJ8tlICdnofSTfuHQvBdLARxbyK6qY9D5F4hTsW0q8hL_NWrdCnACLoiXE2GDdhLH6CnC2l4ZnehUCPzsxPIkSZOADG4a4Ix1eNGDKgav_6tGDU-oT9cnj0umwQb1TJEM24C8xfi2A9nLAAnM-6MmQX4juDpKu6PnIRdxZNsYJV27euV8nbygnvmjQX_-ALxZy-ckdbfqo3Vd6AShzecOEenmY71cs6OdGnLRPpwVKR-0_x3JNDQbQ')",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-linear-to-t from-green-800/80 to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="font-semibold text-white text-sm">
                                Network Integration
                            </p>

                            <p className="text-sm text-white/80 mt-1">
                                Join 500+ leading facilities worldwide.
                            </p>
                        </div>
                    </div>
                </section>
                
                <Outlet />
            </main>
        </div>
    )
}

export default HospitalAuth