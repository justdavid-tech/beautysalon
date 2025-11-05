import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Zubby<span className="text-pink-500">Touch</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Your ultimate destination for beauty, elegance, and confidence.
            We specialize in braiding, makeup, nails, wigs, and more crafted with love.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-500 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-pink-500 transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-pink-500 transition duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="hover:text-pink-500 transition duration-200"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex md:justify-end items-center gap-3">
              <MapPin className="text-pink-500 w-5 h-5" />
              <span>12 Zubby Street, Banex, Abuja</span>
            </li>
            <li className="flex md:justify-end items-center gap-3">
              <Phone className="text-pink-500 w-5 h-5" />
              <a href="tel:+2348123456789" className="hover:text-pink-500">
                +234 000 000 0000
              </a>
            </li>
            <li className="flex md:justify-end items-center gap-3">
              <Mail className="text-pink-500 w-5 h-5" />
              <a
                href="mailto:info@zubbytouch.com"
                className="hover:text-pink-500"
              >
                info@zubbytouch.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ZubbyTouch Beauty Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
