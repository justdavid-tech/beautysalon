import React, { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-pink-600">
            Zubby<span className="text-gray-800">Touch</span>
          </div>

          {/* Center Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-pink-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-pink-600 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
          </ul>

          {/* Right Side - Social Icons */}
          <div className="hidden md:flex space-x-4 text-pink-600">
            <a href="#" className="hover:scale-110 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><Phone size={20} /></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-pink-600">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-pink-600">About</a></li>
            <li><a href="#services" onClick={toggleMenu} className="hover:text-pink-600">Services</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-pink-600">Contact</a></li>
            <div className="flex space-x-4 pt-2 text-pink-600">
              <a href="#" className="hover:scale-110 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:scale-110 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:scale-110 transition"><Phone size={20} /></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
