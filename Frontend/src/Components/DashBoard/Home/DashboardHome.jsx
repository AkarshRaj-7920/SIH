import React from 'react'
import '../Scrollbar.Module.css'
import { IoIosArrowForward } from 'react-icons/io'
import { MdGroups2, MdInsights, MdLocalHospital, MdPeopleAlt } from 'react-icons/md'
import StatCard from './StatCard';
import OPDDepartmentCard from './OPDDepartmentCard';


const DashboardHome = () => {
    return (
        <div className="flex-1 px-4 py-7 sm:px-6 lg:px-8 mt-20 max-w-[90rem] mx-auto w-full">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-8">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 mb-2">Wednesday, 19 August 2026</p>
                    <h2 className="font-bold text-3xl sm:text-4xl tracking-tight text-slate-900 mb-2">
                        Hospital Overview
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500">
                        Real-time metrics for Vitality Pulse General Hospital.
                    </p>
                </div>

                <div className="hidden md:flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[linear-gradient(to_right,#2C5EAD_0%,#1591DC_50%,#32C48D_100%)] [background-size:200%_auto] shadow-[0_6px_20px_rgba(21,145,220,0.25)] transition-all duration-500 hover:[background-position:100%_center] hover:shadow-[0_8px_25px_rgba(21,145,220,0.35)] active:scale-95"
                    >
                        Detailed Status
                    </button>
                </div>
            </div>

            {/*STAT CARDS*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Stat Card 1 */}
                    <StatCard label="Total patients" value="1,248" change="+12%" detail="vs. previous month" />
                    <StatCard label="In consultation" value="86" change="+8%" detail="across 12 departments" icon={MdPeopleAlt} accent="blue" />
                    <StatCard label="Available beds" value="42" change="+4%" detail="of 120 total beds" icon={MdLocalHospital} />
                    <StatCard label="Staff on duty" value="74" change="+6%" detail="92% attendance today" icon={MdGroups2} accent="amber" />
                </div>

                {/*OPD STATUS*/}
                <div className="md:col-span-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Live queue</p><h3 className="font-bold text-xl text-slate-900">
                            OPD Department Status
                        </h3></div>

                        <button className="text-emerald-700 text-sm font-semibold hover:text-emerald-900 flex items-center gap-1">
                            <span>View All</span>

                            <span className="text-sm">
                                <IoIosArrowForward size={18} />
                            </span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                        {/* Department */}
                        <OPDDepartmentCard name="General Medicine" wait="18 min" count="12" status="On track" />
                        <OPDDepartmentCard name="Cardiology" wait="24 min" count="08" status="Moderate" />
                        <OPDDepartmentCard name="Paediatrics" wait="11 min" count="06" status="On track" />
                        <OPDDepartmentCard name="Orthopaedics" wait="31 min" count="14" status="Busy" />
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-4 flex flex-col gap-6">
                    {/* Current Shift */}
                    <div className="rounded-2xl p-6 shadow-sm relative overflow-hidden border border-emerald-200 bg-emerald-950 text-white">
                        <div className="absolute -right-8 -top-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />

                        <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-[0.16em] mb-3">
                            Current Shift
                        </h3>

                        <div className="flex items-end gap-2 mb-4">
                            <span className="font-bold text-4xl text-white">
                                09:48
                            </span>

                            <span className="font-semibold text-xl text-emerald-200 pb-1">
                                PM
                            </span>
                        </div>

                        <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white">
                                    Night Shift Team Alpha
                                </p>

                                <p className="font-medium text-xs text-emerald-200">
                                    Ends in 2h 12m
                                </p>
                            </div>

                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,0.15)]" />
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="rounded-2xl p-6 shadow-sm border border-slate-200 flex-1 flex flex-col justify-center items-center text-center bg-white">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-700">
                            <span className="text-3xl">
                                <MdInsights size={18} />
                            </span>
                        </div>

                        <h4 className="font-bold text-xl text-slate-900 mb-2">
                            System Optimal
                        </h4>

                        <p className="text-sm leading-6 text-slate-500 max-w-xs">
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