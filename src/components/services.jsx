import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Brush, Heart } from "lucide-react";

const services = [
  {
    title: "Braiding",
    icon: <Scissors className="w-6 h-6 text-pink-500" />,
    image:
      "https://images.unsplash.com/photo-1622296089866-57cbe3fb6f4d?auto=format&fit=crop&w=700&q=80",
    description:
      "Beautiful, neat, and long-lasting braids crafted with precision and care.",
  },
  {
    title: "Makeup Artistry",
    icon: <Brush className="w-6 h-6 text-pink-500" />,
    image:
      "https://images.unsplash.com/photo-1609943244161-232f7e4c9e0f?auto=format&fit=crop&w=700&q=80",
    description:
      "Flawless makeup that enhances your natural glow for every occasion.",
  },
  {
    title: "Nail Fixing",
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
    image:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=700&q=80",
    description:
      "Luxury manicures and creative nail designs that make a statement.",
  },
  {
    title: "Wig Installation",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    image:
      "https://images.unsplash.com/photo-1613226265455-d9e96e8e5a3f?auto=format&fit=crop&w=700&q=80",
    description:
      "Professional wig installation for a flawless, natural-looking finish.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-pink-500">Signature Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From trendy braids to flawless makeup and nails we specialize in
          giving you the confidence to shine every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <div className="bg-white p-2 rounded-full mb-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
