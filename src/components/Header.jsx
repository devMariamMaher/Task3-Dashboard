import React from 'react'
import NotificationDropdown from './NotificationDropdown'
import { SlMenu } from "react-icons/sl";
import { IoClose } from 'react-icons/io5'

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden p-2 rounded hover:bg-gray-100 transition">
          {isOpen ? <IoClose className='text-xl'/> : <SlMenu className='text-xl'/>}
        </button>
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>        
        
      <NotificationDropdown />
      </div>
    </>
  )
}

export default Header