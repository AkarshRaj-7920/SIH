import React from 'react'
import { FaUber, FaUser } from 'react-icons/fa'

const Notifications = () => {
    return (
        <div
            className="group flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-slate-50"
        >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <FaUser size={16} />
            </div>


            {/* Content */}
            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-700">
                        Update Profile
                    </h4>

                    {/* Unread */}
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                </div>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Update your profile to unlock full features.
                </p>

                <span className="mt-1 block text-[11px] text-slate-400">
                    Just now
                </span>
            </div>
        </div>

    )
}

export default Notifications