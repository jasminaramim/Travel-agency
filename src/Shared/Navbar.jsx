'use client';

import { FaBars, FaTimes, FaTrain, FaUserCircle } from 'react-icons/fa';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../assets/EarthLogo.png'
import name from '../assets/name.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdowns, setDropdowns] = useState({
    home: false,
    tours: false,
    destination: false,
    pages: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper for NavLink classNames to highlight active links
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'block px-4 py-2 bg-green-100 font-semibold'
      : 'block px-4 py-2 hover:bg-green-100';

  const navLinkClassMobile = ({ isActive }) =>
    isActive
      ? 'block py-1 text-green-600 font-semibold'
      : 'block py-1 hover:text-green-600';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1244px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
          <img className='w-[70px]' src={logo} alt="" />
           <img className='w-[90px]' src={name} alt="" />
          </div>

          {/* Center: Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Home dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-medium flex items-center gap-1">
                Home
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.25 7.75L10 12.5l4.75-4.75H5.25z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50 min-w-[150px]">
                <NavLink to="/home1" className={navLinkClass}>
                  Home 1
                </NavLink>
                <NavLink to="/home2" className={navLinkClass}>
                  Home 2
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-600 font-medium'
                  : 'text-gray-700 hover:text-green-600 font-medium'
              }
            >
              About
            </NavLink>

            {/* Tours dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-medium flex items-center gap-1">
                Tours
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.25 7.75L10 12.5l4.75-4.75H5.25z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50 min-w-[150px]">
                <NavLink to="/tour1" className={navLinkClass}>
                  Tour 1
                </NavLink>
                <NavLink to="/tour2" className={navLinkClass}>
                  Tour 2
                </NavLink>
              </div>
            </div>

            {/* Destination dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-medium flex items-center gap-1">
                Destination
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.25 7.75L10 12.5l4.75-4.75H5.25z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50 min-w-[150px]">
                <NavLink to="/destination1" className={navLinkClass}>
                  Destination 1
                </NavLink>
                <NavLink to="/destination2" className={navLinkClass}>
                  Destination 2
                </NavLink>
              </div>
            </div>

            {/* Pages dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-medium flex items-center gap-1">
                Pages
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.25 7.75L10 12.5l4.75-4.75H5.25z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50 min-w-[150px]">
                <NavLink to="/page1" className={navLinkClass}>
                  Page 1
                </NavLink>
                <NavLink to="/page2" className={navLinkClass}>
                  Page 2
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-600 font-medium'
                  : 'text-gray-700 hover:text-green-600 font-medium'
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right: User icon + button + mobile menu button */}
          <div className="flex items-center space-x-4">
            <FaUserCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />

            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              Book A Trip
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-700" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {/* Home dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('home')}
                className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
              >
                Home
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    dropdowns.home ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdowns.home && (
                <div className="pl-4 space-y-1">
                  <NavLink to="/home1" className={navLinkClassMobile}>
                    Home 1
                  </NavLink>
                  <NavLink to="/home2" className={navLinkClassMobile}>
                    Home 2
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClassMobile}>
              About
            </NavLink>

            {/* Tours dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('tours')}
                className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
              >
                Tours
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    dropdowns.tours ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdowns.tours && (
                <div className="pl-4 space-y-1">
                  <NavLink to="/tour1" className={navLinkClassMobile}>
                    Tour 1
                  </NavLink>
                  <NavLink to="/tour2" className={navLinkClassMobile}>
                    Tour 2
                  </NavLink>
                </div>
              )}
            </div>

            {/* Destination dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('destination')}
                className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
              >
                Destination
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    dropdowns.destination ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdowns.destination && (
                <div className="pl-4 space-y-1">
                  <NavLink to="/destination1" className={navLinkClassMobile}>
                    Destination 1
                  </NavLink>
                  <NavLink to="/destination2" className={navLinkClassMobile}>
                    Destination 2
                  </NavLink>
                </div>
              )}
            </div>

            {/* Pages dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('pages')}
                className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
              >
                Pages
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    dropdowns.pages ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdowns.pages && (
                <div className="pl-4 space-y-1">
                  <NavLink to="/page1" className={navLinkClassMobile}>
                    Page 1
                  </NavLink>
                  <NavLink to="/page2" className={navLinkClassMobile}>
                    Page 2
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClassMobile}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
