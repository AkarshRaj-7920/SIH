import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdInsights } from 'react-icons/md'

const DashboardHome = () => {
    return (
        <div className="flex-1 p-6 mt-20 max-w-7xl mx-auto w-full">
            {/* Page Heading */}
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="font-semibold text-3xl text-green-700 mb-2">
                        Hospital Overview
                    </h2>

                    <p className="text-lg text-gray-600">
                        Real-time metrics for Vitality Pulse General Hospital.
                    </p>
                </div>

                <div className="hidden md:flex gap-3">
                    <button className="px-6 py-2.5 bg-green-700 text-white rounded-xl text-base hover:opacity-90 transition-all shadow-md">
                        Download Report
                    </button>
                </div>
            </div>

            {/*STAT CARDS*/}
            <div className="ml-2 grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                {/* <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        icon="groups"
                        title="Total Patients"
                        value="1,248"
                        badge="+12%"
                        badgeIcon="trending_up"
                    />

                    <StatCard
                        icon="stethoscope"
                        title="Active Doctors"
                        value="156"
                        badge="Active Now"
                    />

                    <StatCard
                        icon="schedule"
                        title="Avg Consult Time"
                        value={
                            <>
                                15
                                <span className="font-headline-sm text-headline-sm text-on-surface-variant ml-1">
                                    min
                                </span>
                            </>
                        }
                        badge="-2m"
                        badgeIcon="trending_down"
                    />

                    <StatCard
                        icon="emergency"
                        title="Emergency Cases"
                        value="24"
                        emergency
                        badge="Critical"
                    />
                </div> */}

                {/*OPD STATUS*/}
                <div className="md:col-span-8 bg-white rounded-2xl p-5 shadow-md border border-gray-300 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-2xl text-gray-900">
                            OPD Department Status
                        </h3>

                        <button className="text-green-700 text-base hover:underline flex items-center gap-1">
                            View All

                            <span className="text-sm">
                                <IoIosArrowForward size={18} />
                            </span>
                        </button>
                    </div>

                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                        {departments.map((department) => (
                            <DepartmentCard
                                key={department.name}
                                department={department}
                            />
                        ))}
                    </div> */}
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-4 flex flex-col gap-6">
                    {/* Current Shift */}
                    <div className="rounded-xl p-8 shadow-md relative overflow-hidden border border-green-700/20 bg-white">
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-700/10 rounded-full blur-2xl" />

                        <h3 className="text-base text-green-700 uppercase tracking-wider mb-2">
                            Current Shift
                        </h3>

                        <div className="flex items-end gap-2 mb-4">
                            <span className="font-semibold text-3xl text-green-700">
                                09:48
                            </span>

                            <span className="font-semibold text-2xl text-gray-600 pb-1">
                                PM
                            </span>
                        </div>

                        <div className="bg-green-50 border border-green-200 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <p className="text-base text-gray-900">
                                    Night Shift Team Alpha
                                </p>

                                <p className="font-medium text-xs text-gray-600">
                                    Ends in 2h 12m
                                </p>
                            </div>

                            <div className="w-2 h-2 rounded-full bg-green-200 border border-green-800" />
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="rounded-xl p-6 shadow-md flex-1 flex flex-col justify-center items-center text-center bg-white">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-green-700">
                            <span className="text-3xl">
                                <MdInsights size={18} />
                            </span>
                        </div>

                        <h4 className="font-semibold text-2xl text-gray-900 mb-2">
                            System Optimal
                        </h4>

                        <p className="text-base text-gray-600">
                            All hospital systems are operating normally. Patient flow is
                            steady.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome