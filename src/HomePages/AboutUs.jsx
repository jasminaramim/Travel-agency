import { useEffect, useState } from "react";

import NeonButton from "../GlobalButtons/NeonButton";
import { Play } from "lucide-react";
import aboutUs from '../assets/Buttons/abouUs.png';
import bgEarthImg from '../assets/earth.png';
import girlView from '../assets/Logos/girlView.jpg';
import skyView from '../assets/Logos/skyView.jpg';
import world from '../assets/world.png'

export const AboutUs = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => (prev >= 20 ? 0 : prev + 0.15)); // slower increment
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background World Map */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={bgEarthImg}
          alt="World Map Background"
          className="w-full h-full object-cover pointer-events-none"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Images and Dots */}
          <div className="relative flex flex-col items-center lg:items-start gap-6">
            {/* Large Image with Experience Badge */}
            <div className="relative w-full max-w-[450px] h-[450px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={world}
                alt="Two people hiking in mountains"
                className="w-full h-full object-cover rounded-xl"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-6 left-6 bg-[#60B848] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                <span className="text-2xl font-bold">20</span>
                <span className="text-sm font-medium">Years Of Experience</span>
              </div>
            </div>

            {/* Small Image with Play Button */}
            <div className="relative w-[280px] h-[200px] rounded-xl overflow-hidden shadow-lg -mt-24 ml-auto mr-auto lg:ml-0 lg:mr-0 lg:self-end lg:translate-x-1/4">
              <img
                src={skyView}
                alt="Person running towards ancient temple"
                className="w-full h-full object-cover rounded-xl"
                style={{ objectFit: "cover" }}
              />
              <NeonButton
                variant="ghost"
                size="icon"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-orange-500/80 text-white hover:bg-orange-600/80 transition-colors"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 fill-current" />
              </NeonButton>
            </div>

            {/* Animated Green Dot Pattern */}
            <div 
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 grid grid-cols-5 gap-2 opacity-70"
              style={{ transform: `translate(-50%, calc(50% + ${offset}px))` }}
            >
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-[#60B848]"
                  style={{ 
                    animation: `bounce 6s infinite ${i * 0.05}s`, // slower 6s duration
                    opacity: 0.7 + (Math.sin(i * 0.2 + offset * 0.1) * 0.3)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Text and Stats */}
          <div className="flex flex-col lg:pl-12 relative">
            {/* About Us Tag */}
            <img className="w-[200px]" src={aboutUs} alt="" />

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
              Embracing Adventure <br className="hidden md:inline" /> And Discovery Since 2006
            </h2>

            {/* Description Paragraphs */}
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Odyssa's mission is to bring travel enthusiasts together through our Organized Adventure Platform,
              connecting them with expert operators who design unforgettable and sustainable multi-day experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our dedicated team of professionals will craft a personalized itinerary tailored to your preferences,
              ensuring every moment of your journey is unforgettable.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="bg-[#E6F5E3] p-6 rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-3xl font-bold text-[#60B848]">20+</h3>
                <p className="text-gray-700 text-sm mt-1">Global Branches</p>
              </div>
              <div className="bg-[#FFF5E0] p-6 rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-3xl font-bold text-[#FF9900]">15K+</h3>
                <p className="text-gray-700 text-sm mt-1">Destinations Covered</p>
              </div>
              <div className="bg-[#E0F5FF] p-6 rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-3xl font-bold text-[#007BFF]">50K+</h3>
                <p className="text-gray-700 text-sm mt-1">Happy Customers</p>
              </div>
            </div>

            {/* Call to Action */}
            <p className="text-gray-600 text-lg mt-8">
              Join us today and start showcasing your tours, activities, and attraction tickets
            </p>

            {/* Discover Us Button */}
            <div className="mt-5 ml-2">
              <NeonButton text="Discover Us" link="https://example.com" />
            </div>

            {/* Animated Orange Dot Pattern */}
            <div 
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-70"
              style={{ transform: `translate(50%, calc(-50% + ${offset}px))` }}
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-orange-300"
                  style={{ 
                    animation: `bounce 9s infinite ${i * 0.00}s reverse`, // slower 6s duration
                    opacity: 0.7 + (Math.sin(i * 0.2 + offset * 0.1) * 0.3)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
