import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Import service images
import braidsGallery from "../assets/images/braids-gallery.jpg";
import makeupGallery from "../assets/images/makeup-gallery.jpg";
import wigInstallationGallery from "../assets/images/wiginstallation-gallery.jpg";
import nailGallery from "../assets/images/nail-gallery.jpg";
import nailsGallery from "../assets/images/nails-gallery.jpg";
import manicureGallery from "../assets/images/manicure.jpeg";
import pedicureGallery from "../assets/images/pedicure.jpeg";
import hairdyeGallery from "../assets/images/hairdye-gallery.jpg";

import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Heart, 
  Eye, 
  TrendingUp, 
  CheckCircle, 
  CheckCircle2,
  Clock, 
  Users,
  Star,
  Award,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Phone,
  Calendar
} from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const services = [
    {
      id: 1,
      name: "Braiding",
      category: "hair",
      price: "₦5,000 - ₦10,000",
      duration: "2-4 hours",
      description: "Expert braiding services including box braids, cornrows, twist braids, and protective styles. We use premium hair extensions and ensure gentle, tension-free braiding for scalp health.",
      features: [
        "Premium synthetic/natural hair included",
        "Scalp treatment included",
        "Style consultation",
        "Post-care instructions",
        "Free touch-up within 7 days"
      ],
      popular: true,
      image: braidsGallery
    },
    {
      id: 2,
      name: "Makeup Artistry",
      category: "makeup",
      price: "₦40,000 - ₦50,000",
      duration: "1-2 hours",
      description: "Professional makeup application for everyday glam, special occasions, bridal looks, and editorial styles. Using high-end, cruelty-free products.",
      features: [
        "Skin prep & primer",
        "Custom color matching",
        "Lashes included",
        "Makeup setting",
        "Touch-up kit"
      ],
      popular: true,
      image: makeupGallery
    },
    {
      id: 3,
      name: "Wig Installation",
      category: "hair",
      price: "₦15,000 - ₦20,000",
      duration: "1.5-3 hours",
      description: "Professional wig customization, installation, and blending services. We specialize in lace front wigs, full lace, and custom units.",
      features: [
        "Wig customization & cutting",
        "Scalp protection",
        "Secure installation",
        "Natural hairline blending",
        "Maintenance tutorial"
      ],
      popular: false,
      image: wigInstallationGallery
    },
    {
      id: 4,
      name: "Lash Extensions",
      category: "lashes",
      price: "₦5,000 - ₦10,000",
      duration: "1.5-2.5 hours",
      description: "Custom lash extensions including classic, volume, hybrid, and mega volume sets. Using premium synthetic and mink lashes.",
      features: [
        "Custom design consultation",
        "Premium adhesive",
        "Eye safety protocol",
        "Aftercare kit",
        "Free fill within 2 weeks"
      ],
      popular: true,
      image: nailGallery
    },
    {
      id: 5,
      name: "Nail Art & Design",
      category: "nails",
      price: "₦10,000 - ₦13,000",
      duration: "45-90 mins",
      description: "Complete nail services including gel manicures, acrylics, nail art, and nail enhancements. Sanitized tools and premium products.",
      features: [
        "Nail shaping & cuticle care",
        "Hand massage",
        "Gel/acrylic application",
        "Custom nail art",
        "Long-lasting finish"
      ],
      popular: false,
      image: nailsGallery
    },
    {
      id: 6,
      name: "Manicure",
      category: "nails",
      price: "₦10,000 - ₦20,000",
      duration: "30-60 mins",
      description: "Luxury manicure services with exfoliation, moisturizing, and polish. Choose from regular, gel, or dip powder finishes.",
      features: [
        "Hand soak & exfoliation",
        "Cuticle treatment",
        "Hand & arm massage",
        "Moisturizing treatment",
        "Polish of choice"
      ],
      popular: false,
      image: manicureGallery
    },
    {
      id: 7,
      name: "Pedicure",
      category: "nails",
      price: "₦10,000 - ₦20,000",
      duration: "45-75 mins",
      description: "Relaxing pedicure with foot massage, callus removal, and polish. Our spa pedicures include paraffin wax treatment.",
      features: [
        "Foot soak & scrub",
        "Callus removal",
        "Leg & foot massage",
        "Moisturizing mask",
        "Polish application"
      ],
      popular: true,
      image: pedicureGallery
    },
    {
      id: 8,
      name: "Hair Coloring",
      category: "hair",
      price: "₦10,000 - ₦20,000",
      duration: "2-5 hours",
      description: "Expert hair coloring services including balayage, highlights, full color, and creative color. We use professional-grade, ammonia-free color.",
      features: [
        "Strand test & consultation",
        "Olaplex treatment included",
        "Premium color products",
        "Toning & gloss treatment",
        "Aftercare products"
      ],
      popular: true,
      image: hairdyeGallery
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair Services" },
    { id: "nails", name: "Nail Services" },
    { id: "makeup", name: "Makeup" },
    { id: "lashes", name: "Lash Services" },
  ];

  const filteredServices = selectedFilter === "all" 
    ? services 
    : services.filter(service => service.category === selectedFilter);

  const packageDeals = [
    {
      name: "Glam Package",
      price: "₦150,000",
      originalPrice: "₦630,000",
      services: ["Makeup Artistry", "Lash Extensions", "Manicure"],
      description: "Perfect for special occasions and photoshoots",
      popular: true
    },
    {
      name: "Pamper Day",
      price: "₦270,000",
      originalPrice: "₦360,000",
      services: ["Manicure", "Pedicure", "Basic Makeup"],
      description: "Full day of relaxation and beauty treatments",
      popular: false
    },
    {
      name: "Hair Transformation",
      price: "₦525,000",
      originalPrice: "₦720,000",
      services: ["Hair Coloring", "Braiding", "Scalp Treatment"],
      description: "Complete hair makeover with aftercare",
      popular: true
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
     <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Beauty Salon Background"
          className="w-full h-full object-cover"
        />
        {/* The overlay gradient creates contrast so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-purple-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        {/* Badge Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-100 text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Star size={14} className="fill-current" />
          <span>World-Class Care</span>
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">Beauty</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-pink-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Experience luxury treatments tailored to your unique style. 
          From revitalizing facials to precision styling, we bring out the best in you.
        </p>

        {/* 3. Trust Pills (Glassmorphism) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Shield, text: "Sanitized Equipment" },
            { icon: Award, text: "Certified Experts" },
            { icon: CheckCircle2, text: "Premium Products" },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all cursor-default"
            >
              <item.icon size={20} className="text-pink-300" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="group flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-600/30"
          >
            Book Appointment
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#gallery"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
          >
            View Gallery
          </a>
        </div>

      </div>
    </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Browse Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of beauty services tailored to enhance your natural beauty
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === category.id
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.name}
                    </h3>
                    <span className="text-2xl font-bold text-pink-600">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock size={16} className="mr-1" />
                    <span className="mr-4">{service.duration}</span>
                    <Users size={16} className="mr-1" />
                    <span>1:1 Service</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center justify-between w-full py-3 text-pink-600 font-medium"
                  >
                    <span>View Details</span>
                    {expandedService === service.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  
                  {expandedService === service.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-700 mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href="#book"
                      className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-300"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Special Package Deals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save up to 25% with our curated beauty packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageDeals.map((deal, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                  deal.popular ? "border-2 border-pink-500" : ""
                }`}
              >
                {deal.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-pink-500 text-white text-center py-2 font-bold">
                    BEST VALUE
                  </div>
                )}
                
                <div className={`text-center pt-${deal.popular ? '8' : '0'}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {deal.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-600">
                      {deal.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      {deal.originalPrice}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{deal.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {deal.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle size={18} className="text-green-500 mr-2" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#book"
                    className={`block w-full py-3 rounded-lg font-bold transition-colors duration-300 ${
                      deal.popular
                        ? "bg-pink-600 text-white hover:bg-pink-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 bg-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Book your appointment today and experience premium beauty services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">1.</div>
              <h4 className="font-bold text-lg mb-2">Book Online</h4>
              <p className="opacity-80">Easy 24/7 online scheduling</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">2.</div>
              <h4 className="font-bold text-lg mb-2">Consultation</h4>
              <p className="opacity-80">Personalized service planning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">3.</div>
              <h4 className="font-bold text-lg mb-2">Enjoy Service</h4>
              <p className="opacity-80">Relax and be pampered</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-lg"
            >
              Book Appointment Now
            </a>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "What is your cancellation policy?",
                a: "We require 24 hours notice for cancellations. Late cancellations may incur a 50% fee. No-shows will be charged the full service amount."
              },
              {
                q: "Do you use vegan/cruelty-free products?",
                a: "Yes! We pride ourselves on using only vegan, cruelty-free, and professional-grade products for all our services."
              },
              {
                q: "How long do the services typically last?",
                a: "Service duration varies. Manicures take 30-60 minutes, while braiding or coloring can take 2-5 hours. Each service listing includes estimated duration."
              },
              {
                q: "Can I bring my own hair/nail products?",
                a: "For safety and quality reasons, we use only our professional-grade products. However, we can discuss specific needs during your consultation."
              },
              {
                q: "Do you offer gift cards?",
                a: "Yes! We offer digital and physical gift cards in any amount. They make perfect gifts for birthdays, holidays, or just because!"
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-pink-300 transition-colors">
                <h4 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Services;