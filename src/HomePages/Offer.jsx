// src/components/Offer.jsx

import { GiRose } from 'react-icons/gi'; // Importing a suitable icon
import React from 'react';
import offer1 from '../assets/Offer1.jpg'
import offer2 from '../assets/offer2.png'

export const Offer = () => {
  return (
    <section className="max-w-[1244px] mx-auto items-center py-16 bg-white px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Card 1: Amazing Deal */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
          {/* Background Image */}
          <img
            src={offer1}
            alt="Hot air balloons over a scenic landscape"
            className="w-full h-full object-cover"
          />

         
        </div>

        {/* Card 2: Honeymoon Special */}
        <div className="relative bg-green-800 rounded-2xl overflow-hidden shadow-lg h-80 flex">
          {/* Dashed Border Effect */}
          <div className="absolute inset-2 border-2 border-dashed border-white opacity-40 rounded-xl z-10 pointer-events-none"></div>

          {/* Left Side: Green Content Area */}
          <div className="w-1/2 p-8 text-white flex flex-col justify-center relative z-20">
            <p className="font-light">Make dream holiday!</p>
            <h2 className="text-4xl font-bold mt-2">Honeymoon Special</h2>
            <p className="mt-4 text-2xl font-semibold">
              <span className="text-lime-400">Save 25%</span> with us!
            </p>
            <button className="relative mt-6 bg-white text-green-900 font-bold py-3 px-8 rounded-full w-48 hover:bg-gray-200 transition-colors">
              Book Now
              {/* Decorative Flowers */}
              <GiRose className="absolute text-red-500 text-3xl -left-3 -bottom-2 transform rotate-[-30deg]" />
              <GiRose className="absolute text-red-500 text-3xl -right-3 -bottom-2 transform rotate-[30deg]" />
            </button>
          </div>

          {/* Right Side: Image with a curved clip path */}
          <div className="absolute right-0 top-0 h-full w-1/2 z-0">
             <div 
                className="absolute inset-0 bg-green-800"
                style={{ clipPath: 'ellipse(100% 80% at 0% 50%)' }} // Creates the curve
             ></div>
            <img
              src={offer2}
              alt="Couple on a beach at sunset"
              className="w-full h-full object-cover"
              style={{ clipPath: 'ellipse(150% 80% at 100% 50%)' }} // Clips the image itself
            />
          </div>
        </div>

      </div>
    </section>
  );
};