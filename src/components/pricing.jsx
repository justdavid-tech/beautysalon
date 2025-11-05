import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Brush, Sparkles, Heart, Droplet, Hand, Layers } from "lucide-react";

const services = [
  {
    name: "Braiding",
    price: "₦10,000 - ₦25,000",
    icon: <Scissors className="w-6 h-6 text-pink-500" />,
    desc: "Protective styles that enhance your beauty and confidence.",
  },
  {
    name: "Nail Fixing",
    price: "₦4,000 - ₦10,000",
    icon: <Hand className="w-6 h-6 text-pink-500" />,
    desc: "Elegant nails for every occasion, crafted with precision.",
  },
  {
    name: "Makeup",
    price: "₦8,000 - ₦20,000",
    icon: <Brush className="w-6 h-6 text-pink-500" />,
    desc: "From soft glam to bridal perfection — we bring out your radiance.",
  },
  {
    name: "Wig Installation",
    price: "₦6,000 - ₦15,000",
    icon: <Layers className="w-6 h-6 text-pink-500" />,
    desc: "Seamless wig installs that look natural and feel amazing.",
  },
  {
    name: "Lash Extensions",
    price: "₦5,000 - ₦12,000",
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
    desc: "Luxurious lashes that define your eyes effortlessly.",
  },
  {
    name: "Manicure",
    price: "₦3,000 - ₦8,000",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    desc: "Clean, soft, and classy hands with our pampering touch.",
  },
  {
    name: "Pedicure",
    price: "₦4,000 - ₦10,000",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    desc: "Give your feet the love and care they deserve.",
  },
  {
    name: "Hair Dying",
    price: "₦8,000 - ₦18,000",
    icon: <Droplet className="w-6 h-6 text-pink-500" />,
    desc: "Vibrant and lasting hair colors for a confident, bold look.",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-pink-500">Pricing</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Beauty is an investment an nd we make it worthwhile. Choose a service
          that brings out your best self.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-pink-50 border border-pink-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-pink-600 font-bold mb-3">{service.price}</p>
              <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

              <Link
                to="/contact"
                className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition duration-300"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
