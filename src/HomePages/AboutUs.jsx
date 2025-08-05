import { useEffect, useState } from "react";

import NeonButton from "../GlobalButtons/NeonButton";
import aboutUs from '../assets/Buttons/abouUs.png';
import bgEarthImg from '../assets/earth.png';
import girlView from '../assets/last.png';

export const AboutUs = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = document.querySelector(".about-us-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animate = () => {
            setOffset((prev) => (prev >= 20 ? 0 : prev + 0.15));
            requestAnimationFrame(animate);
          };
          const animationId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationId);
        }
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden about-us-section">
      {/* Background World Map */}
      <div className="absolute inset-0 z-0 opacity-10 sm:opacity-15 md:opacity-20">
        <img
          src={bgEarthImg}
          alt="World Map Background"
          className="w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Section - Image and Dots */}
          <div className="relative w-full lg:w-1/2">
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden rounded-lg ">
              <img
                src={girlView}
                alt="Two people hiking in mountains"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Animated Green Dot Pattern */}
            <div
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 grid grid-cols-4 sm:grid-cols-5 gap-1 sm:gap-2 opacity-60 sm:opacity-70"
              style={{ transform: `translate(-50%, calc(50% + ${offset}px))` }}
            >
              {Array.from({ length: window.innerWidth < 640 ? 16 : 25 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#60B848]"
                  style={{
                    animation: `bounce 6s infinite ${i * 0.05}s`,
                    opacity: 0.7 + Math.sin(i * 0.2 + offset * 0.1) * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Text and Stats */}
          <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0 lg:pl-8 relative">
            {/* About Us Tag */}
            <img
              className="w-32 sm:w-40 md:w-48"
              src={aboutUs}
              alt="About Us logo"
            />

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-4">
              Embracing Adventure <br className="hidden sm:inline" /> And Discovery Since 2006
            </h2>

            {/* Description Paragraphs */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              Odyssa's mission is to bring travel enthusiasts together through our Organized Adventure Platform,
              connecting them with expert operators who design unforgettable and sustainable multi-day experiences.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
              Our dedicated team of professionals will craft a personalized itinerary tailored to your preferences,
              ensuring every moment of your journey is unforgettable.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-[#E6F5E3] p-4 sm:p-6 rounded-lg sm:rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#60B848]">20+</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">Global Branches</p>
              </div>
              <div className="bg-[#FFF5E0] p-4 sm:p-6 rounded-lg sm:rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF9900]">15K+</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">Destinations Covered</p>
              </div>
              <div className="bg-[#E0F5FF] p-4 sm:p-6 rounded-lg sm:rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#007BFF]">50K+</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">Happy Customers</p>
              </div>
            </div>

            {/* Call to Action */}
            <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-8">
              Join us today and start showcasing your tours, activities, and attraction tickets
            </p>

            {/* Discover Us Button */}
            <div className="mt-4 sm:mt-5">
              <NeonButton
                text="Discover Us"
                link="https://example.com"
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
              />
            </div>

            {/* Animated Orange Dot Pattern */}
            <div
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-1 sm:gap-2 opacity-60 sm:opacity-70"
              style={{ transform: `translate(50%, calc(-50% + ${offset}px))` }}
            >
              {Array.from({ length: window.innerWidth < 640 ? 9 : 15 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-300"
                  style={{
                    animation: `bounce 9s infinite ${i * 0.05}s reverse`,
                    opacity: 0.7 + Math.sin(i * 0.2 + offset * 0.1) * 0.3,
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
            transform: translateY(-6px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .bounce {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};