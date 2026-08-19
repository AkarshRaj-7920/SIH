import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa'
import Notifications from './Notifications'

const NotificationDropdown = ({isNotificationOpen, setisNotificationOpen, notificationRef}) => {
    return (
        <div
            ref={notificationRef}
            className="relative"
        >
            {/* Notification Button */}
            <button
                onClick={() => setisNotificationOpen((prev) => !prev)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-slate-100"
            >
                <FaBell size={18} />

                {/* Unread indicator */}
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>


            {/* Notification Dropdown */}
            {isNotificationOpen && (
                <div
                    className="absolute right-0 top-12 z-50 w-[320px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

                        <div>
                            <h3 className="text-base font-semibold text-slate-800">
                                Notifications
                            </h3>

                            <p className="mt-0.5 text-xs text-slate-400">
                                You have new notifications
                            </p>
                        </div>

                        <button
                            className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
                            onClick={() => {
                                // Mark all as read
                            }}
                        >
                            Mark all read
                        </button>

                    </div>

                    {/* Notifications List */}
                    <div className="max-h-[40vh] overflow-y-auto p-1">
                        {/* Notification */}
                        <Notifications />
                        {/* Another notification */}
                        <Notifications />
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-200 p-2">
                        <div className="w-full rounded-lg py-2 text-sm text-center font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-800">
                            View all notifications
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NotificationDropdown