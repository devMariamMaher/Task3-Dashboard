import React, { useState } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

const NotificationDropdown = () => {
    const [open, setOpen] = useState(false);

    const notifications = [
      { message: "New project added", date: "12-08-2025" },
      { message: "Payment received", date: "11-08-2025" },
      { message: "Task deadline approaching", date: "10-08-2025" }
    ];

    return (
      <>
        <div className='relative'>
          <button onClick={() => setOpen(!open)}><IoMdNotificationsOutline className='text-2xl'/></button>

          {open && (
            <div className='absolute right-0 bg-white w-64 p-3 shadow-2xl border border-slate-200 rounded'>
              <ul>
                {notifications.map((v, i)=>(
                  <li key={i} className="p-2 hover:bg-gray-100 transition">
                    <p className="text-sm font-medium">{v.message}</p>
                    <span className="text-xs text-gray-500">{v.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
}

export default NotificationDropdown