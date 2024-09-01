import './Header.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';{}

export default function Header() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate(); 

const handleButtonClick = () => {
    if (isSignedIn) {
    setIsSignedIn(false);
    navigate('/'); 
    } else {
    setIsSignedIn(true);
    navigate('/getstarted')
    }
};
return (
    <header className="shadow sticky z-50 top-0">
    <motion.nav
        className="navbar border-gray-200 px-4 lg:px-6 py-2.5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
        <motion.img
            src={"_47122bd7-f465-4ec5-a941-008c4b8b28f2.jpg"}
            className="mr-3 h-12 logo"
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            />
        </Link>
        <div className="flex items-center lg:order-2">
            <button className="button-secondary mr-2" onClick={() => navigate('/login')}>
                            Log in
                        </button>
            <button 
                            className="button-primary mr-2"
                            onClick={handleButtonClick}
                        >
                            {isSignedIn ? "Sign out" : "Get started"}
                        </button>
        </div>
        <div className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
                <NavLink
                to="/"
                className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                About
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/github"
                className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                GitHub
                </NavLink>
            </li>
            </ul>
        </div>
        </div>
    </motion.nav>
    </header>
);
}
