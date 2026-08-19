import React from 'react'
import { MdLocalHospital } from 'react-icons/md'

const OPDDepartmentCard = ({ name, wait, count, status }) => {
    return (
        <div className='rounded-xl p-4 border border-slate-200 bg-slate-50/70 flex items-center justify-between hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors'>
            <div className='flex items-center gap-4'>
                {/* Department Icon */}
                <div className='w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-700 shadow-sm'>
                    <span>
                        <MdLocalHospital size={18} />
                    </span>
                </div>

                {/* Department Information */}
                <div>
                    <p className='text-sm font-semibold text-slate-800'>
                        {name}
                    </p>

                    <p className='font-medium text-xs text-slate-500'>
                        {wait} wait time
                    </p>
                </div>
            </div>

            {/* Patient Count */}
            <div className='text-right'>
                <span className='font-bold text-2xl text-emerald-700'>
                    {count}
                </span>
                <p className='text-[10px] font-semibold uppercase tracking-wider text-slate-400'>{status}</p>
            </div>
        </div>
    )
}

export default OPDDepartmentCard