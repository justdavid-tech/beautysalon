import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-pink-50 to-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/images/salon-showroom.jpg"
            alt="About our salon"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
            <Sparkles size={18} /> Est. 2025
          </div>
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-pink-500">Our Salon</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            At <span className="font-semibold text-gray-800">Zubby</span>, 
            we believe beauty is an experience, not a service. From braids to makeup, 
            nails to lashes. Every session is crafted with passion, precision, and a 
            personal touch that leaves you feeling empowered and radiant.
          </p>
          <p className="text-gray-600 mb-8">
            Our talented team of professionals is committed to bringing out 
            the best in every client because you deserve to look and feel 
            like royalty every single day.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Learn More <Heart size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
