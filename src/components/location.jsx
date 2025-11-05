import React from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Find <span className="text-pink-500">Us</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Visit our beauty studio and experience the magic in person  
          We’re always ready to give you that stunning look you deserve.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Embed */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.509067509305!2d3.366243974994027!3d6.585471623427366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b8d6b761cf%3A0x62d8c33b724b5f1c!2sIkeja%20City%20Mall!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Contact Details
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-pink-500 w-5 h-5" />
                <span>12 Zubby Street, Banex, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="text-pink-500 w-5 h-5" />
                <a
                  href="tel:+2348123456789"
                  className="hover:text-pink-500 transition"
                >
                  +234 812 345 6789
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="text-pink-500 w-5 h-5" />
                <a
                  href="mailto:info@beautysalon.com"
                  className="hover:text-pink-500 transition"
                >
                  info@beautysalon.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Instagram className="text-pink-500 w-5 h-5" />
                <a
                  href="https://instagram.com/beautysalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  @beautysalon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
