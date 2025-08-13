import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

            <div className="flex flex-col flex-1">
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />

                <main className="flex-1 bg-gray-50 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
