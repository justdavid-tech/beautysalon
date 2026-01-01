import React from "react";
import { Heart, Star, Users, Clock, Sparkles, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      
      {/* 1. Hero Section */}
      <div className="relative h-[60vh] w-full flex items-center justify-center bg-pink-900">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Salon Interior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="text-pink-300 font-bold uppercase tracking-widest mb-4">Who We Are</h4>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Redefining Beauty, <br />
            <span className="text-pink-400">One Touch at a Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            At ZubbyTouch, we believe beauty is an art form. Step into a world where elegance meets expertise.
          </p>
        </div>
      </div>

      {/* 2. Our Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Makeup Artist" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hair Styling" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Welcome to <span className="text-pink-600">ZubbyTouch</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for self-expression, ZubbyTouch started as a small dream to help people feel confident in their own skin. Over the years, we have grown into a premier beauty destination, known for our attention to detail and personalized care.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We aren't just a salon; we are a sanctuary. Whether you are prepping for your wedding day, a red carpet event, or just need a self-care reset, our team is dedicated to bringing your vision to life.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-pink-600">5+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-pink-600">2k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-pink-600">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Values) */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why our clients love us</h2>
            <p className="text-gray-600">We don't just offer services; we offer an experience rooted in quality, hygiene, and care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Products</h3>
              <p className="text-gray-500">We only use top-tier, dermatologically tested products to ensure your skin and hair stay healthy and radiant.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hygiene First</h3>
              <p className="text-gray-500">Your safety is our priority. We adhere to strict sterilization protocols for all tools and workstations.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
              <p className="text-gray-500">No two faces are alike. We customize every makeup look and treatment to suit your unique features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet The Team */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Artists</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Grace", role: "Founder & Lead Stylist", img: "/images/ceo.jpeg" },
            { name: "Sarah", role: "Makeup Artist", img: "/images/worker1.jpeg" },
            { name: "Jessica", role: "Hair Specialist", img: "/images/worker2.jpeg" },
            { name: "Amara", role: "Nail Technician", img: "/images/worker2.jpeg" },
          ].map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-xl">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-pink-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-pink-600 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get the ZubbyTouch?</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Book your appointment today and let us bring out the best version of you.
          </p>
          <a 
            href="#book"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Book Appointment
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;