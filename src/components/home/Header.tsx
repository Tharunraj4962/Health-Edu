import React, { useState } from 'react';
import Logo from '../../assets/hedu-Logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo Section */}
                    <div>
                        <img src={Logo} alt="Logo" className="h-18" />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            className="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <nav className="hidden lg:flex space-x-6 text-[17px] font-medium font-manrope">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Colleges</a>
                        <a href="#" className="hover:underline">Courses</a>
                        <a href="#" className="hover:underline">Counselling</a>
                        <a href="#" className="hover:underline">Scholarships</a>
                        <a href="#" className="hover:underline">Contact us</a>
                        <a href="#" className="hover:underline">Login</a>
                        <a href="#" className="bg-primary text-white rounded-3xl py-1 px-4">Register</a>
                    </nav>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-md">
                        <ul className="flex flex-col items-center space-y-3 py-4 text-[17px] font-medium font-manrope">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Colleges</a></li>
                            <li><a href="#" className="hover:underline">Courses</a></li>
                            <li><a href="#" className="hover:underline">Counselling</a></li>
                            <li><a href="#" className="hover:underline">Scholarships</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">Login</a></li>
                            <li><a href="#" className="bg-primary text-white rounded-3xl py-1 px-4">Register</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
