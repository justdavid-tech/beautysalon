import React, { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const images = [
    "/images/braids.png", // braids
    "/images/makeup.png", // makeup
    "/images/nails.jpeg", // nails
    "/images/hair.jpeg", // hair
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Images (fading) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Unleash Your Inner <span className="text-pink-400">Beauty</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Professional braiding, makeup, nails, lashes & hair styling made for
          queens who love to shine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition duration-300"
          >
            Book Appointment <ArrowRight size={20} />
          </a>
          <a
            href="#services"
            className="border border-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            View Services
          </a>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-1 mt-8 text-sm text-gray-200">
          <Star size={16} className="text-yellow-400" />
          <Star size={16} className="text-yellow-400" />
          <Star size={16} className="text-yellow-400" />
          <Star size={16} className="text-yellow-400" />
          <Star size={16} className="text-yellow-400" />
          <span className="ml-2">Loved by 500+ happy clients</span>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
