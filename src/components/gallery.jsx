import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

// Import images directly
import braids from "../assets/images/braids-gallery.jpg";
import makeup from "../assets/images/makeup-gallery.jpg";
import hairdye from "../assets/images/hairdye-gallery.jpg";
import manicure from "../assets/images/manicure-gallery.jpg";
import nail from "../assets/images/nail-gallery.jpg";
import nails from "../assets/images/nails-gallery.jpg";
import wigInstall from "../assets/images/wiginstallation-gallery.jpg";
import Hair2 from "../assets/images/hair2-gallery.jpg";

const galleryImages = [
  braids,
  makeup,
  hairdye,
  manicure,
  nail,
  nails,
  wigInstall,
  Hair2
];

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-pink-500">Gallery</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Step inside our world of creativity where beauty is expressed in every
          braid, brushstroke, and polished detail.
        </p>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition duration-300"></div>
            </div>
          ))}
        </Masonry>

        <div className="mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
