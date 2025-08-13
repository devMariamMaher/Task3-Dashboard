import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-30 sm:hidden"></div>
            )}

            <nav className={`fixed sm:static top-0 left-0 bottom-0 bg-white shadow-md p-6 w-[50%] sm:w-[30%] md:w-[22%] lg:w-[16%] z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                <div>
                    <ul>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'navLink active' : 'navLink'} to="/">Overview</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'navLink active' : 'navLink'} to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'navLink active' : 'navLink'} to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default Sidebar