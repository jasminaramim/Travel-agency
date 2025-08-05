import '../TopDestination.css';

import React from 'react';
import bgimg from '../assets/desti2.png'
import topdesti from '../assets/topdesti.png'

const destinations = [
  {
    name: 'Mexico',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLwa-1vdCKtw-ehZkV2wFoqagKOCAy94AdA&s',
    tours: 26,
    activities: 45,
    description: 'A Vibrant Tapestry of Culture, History, and Natural Wonders',
  },
  {
    name: 'USA',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyJ6PzNfnwtmLwFrX-UUTXz-Wqnnc8aJw7g&s',
    tours: 33,
    activities: 21,
    description: 'A Land of Breathtaking Landscapes and Rich Cultural Heritage',
  },
  {
    name: 'Switzerland',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ohYWILl2AsYN8iWOLvyAe7tPOJBJP_6Dqg&s',
    tours: 12,
    activities: 28,
    description: 'A Perfect Blend of Majestic Alps, Charming Villages, and Timeless Beauty',
  },
  {
    name: 'Amsterdam',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5aMFhzN-RUVMOM3KSXzsjnaM0pYAenFyDkw&s',
    tours: 86,
    activities: 28,
    description: 'A Vibrant City of Canals, Culture, and Rich History',
  },
  {
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=500&q=80',
    tours: 45,
    activities: 60,
    description: 'Where Ancient Traditions Meet Futuristic Technology',
  },
  {
    name: 'Italy',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=500&q=80',
    tours: 78,
    activities: 90,
    description: 'Home to Roman Ruins, Renaissance Art, and Exquisite Cuisine',
  },
];

// Card Component
const DestinationCard = ({ destination }) => (
  <div className="flex-shrink-0 w-[300px] mx-4 flex flex-col items-center text-center">
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-40 text-white text-xl font-bold rounded-b-full">
        {destination.name}
      </div>
    </div>
    <div className="mt-4">
      <p className="font-semibold text-gray-800">{destination.tours} Tours, {destination.activities} Activities</p>
      <p className="text-gray-600 mt-2 text-sm">{destination.description}</p>
    </div>
    <button className="mt-4 bg-green-500 text-white py-2 px-8 rounded-full hover:bg-green-600 transition-colors">
      View All
    </button>
  </div>
);

export const TopDestination = () => {
  const extendedDestinations = [...destinations, ...destinations];

  return (
    <div className="max-w-[1244px] mx-auto items-center py-16 bg-white px-4">
      {/* Banner */}
      <div className="relative w-full h-[650px] rounded-3xl overflow-hidden flex items-center justify-center text-white text-center">
        <img
          src={bgimg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
     <div className="relative z-20 flex flex-col items-center justify-center">
  <div className="flex justify-center items-center w-full">
    <img className="w-[200px]" src={topdesti} alt="Top Destination" />
  </div>
  <p className="text-lg md:text-6xl font-bold mt-4">
    Top Trending Places This Week
  </p>
</div>

      </div>

      {/* Marquee */}
      <div className="relative w-full -mt-56 pt-16">
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee-reverse">
            {extendedDestinations.map((dest, index) => (
              <DestinationCard key={index} destination={dest} />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
