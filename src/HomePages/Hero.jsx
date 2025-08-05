import { FaBed, FaCalendarAlt, FaHotel, FaMapMarkerAlt, FaPassport, FaPlane, FaSearch, FaUsers } from 'react-icons/fa';
import React, { useState } from 'react';

import NeonButton from '../GlobalButtons/NeonButton';
import heroBg from '../assets/hero.jpg';
import nature from '../assets/enjoy.png';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('tour');

  return (
    <div
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-start justify-between gap-10 py-12">
        {/* Left content */}
        <div className="md:w-1/2 text-white">
          <img src={nature} alt="Enjoy Nature" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Embrace The World’s Beauty<br />Day By Day
          </h1>
          <p className="text-sm md:text-base text-gray-200 mb-6">
            Welcome to Odyzaa, your trusted partner in unforgettable adventures with expertly crafted tours.
          </p>
          {/* <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
     
          </button> */}
          <NeonButton text="View Packages" link="https://example.com" />


        </div>

        {/* Right form */}
        <div className="bg-white w-full md:w-[420px] p-6 rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="flex border-b">
            {[
              { id: 'tour', label: 'Tour', icon: <FaPlane /> },
              { id: 'hotel', label: 'Hotel', icon: <FaHotel /> },
              { id: 'visa', label: 'Visa', icon: <FaPassport /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 font-medium transition ${
                  activeTab === tab.id ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form fields */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block font-semibold text-sm mb-1">Location</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <select className="w-full outline-none text-sm">
                  <option>Choose your location</option>
                  <option>Paris</option>
                  <option>Bangkok</option>
                  <option>New York</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">Check In – Check Out</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <input type="text" placeholder="12-Aug – 20-Aug" className="w-full outline-none text-sm" />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">Room</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaBed className="text-gray-400 mr-2" />
                <select className="w-full outline-none text-sm">
                  <option>Room Type</option>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Deluxe</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">Guests</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaUsers className="text-gray-400 mr-2" />
                <select className="w-full outline-none text-sm">
                  <option>5 Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition">
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};