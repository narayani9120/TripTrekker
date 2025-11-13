import React from "react";
import SliderComponent from "./SliderComponent";

const Home = () => {
  return (
    <>
      <SliderComponent />

      {/* Review Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="src/assets/user.jpg"
            alt="user"
            className="w-20 h-20 mb-4 rounded-full object-cover"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-3">
            3000+ SUCCESSFUL TRIPS
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            A proven history of delivering unparalleled travel experiences with
            over 3000 meticulously planned journeys.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="src/assets/travel.jpg"
            alt="experience"
            className="w-20 h-20 mb-4 rounded-full object-cover"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-3">
            HANDCRAFTED EXPERIENCE
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Curated itineraries tailored to individual preferences and desires,
            with impeccable attention to detail in every aspect of the voyage,
            dedicated to crafting extraordinary moments and indelible memories.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="src/assets/rating.jpg"
            alt="travel"
            className="w-20 h-20 mb-4 rounded-full object-cover"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-3">
            EXTREMELY HAPPY TRAVELLERS
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Exceptional customer satisfaction and a loyal client base, with
            glowing reviews and heartfelt testimonials from ecstatic travelers,
            devoted to surpassing expectations and ensuring an exquisite travel
            experience.
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center py-8 px-6">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
          TOP SELLERS...
        </h1>
      </div>

      <section className="relative h-[90vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
          alt="Beach Resort"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Overlay (optional soft dark filter) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Explore the World, Create Memories
          </h3>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">
            Embrace Adventure
          </h1>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
              View More
            </button>
            <button className="px-6 py-3 bg-green-600 border-2 border-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
              Find Packages
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
