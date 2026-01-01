import React, { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  Clock,
  Shield,
  Award,
  Sparkles,
  ArrowRight,
  MailOpen,
  Send,
  CheckCircle,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  const services = [
    "Braiding",
    "Makeup Artistry",
    "Wig Installation",
    "Lash Extensions",
    "Nail Art & Design",
    "Manicure",
    "Pedicure",
    "Hair Coloring"
  ];

  const businessHours = [
    { day: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ec4899' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Top Section with Call to Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white">
                  Ready for Your Transformation?
                </h3>
              </div>
              <p className="text-gray-300 max-w-2xl">
                Book your appointment today and experience premium beauty services 
                crafted just for you.
              </p>
            </div>
            <Link
              to="/booking"
              className="group inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-pink-600/30"
            >
              Book Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                Zubby<span className="text-pink-400">Touch</span>
              </h2>
              <p className="text-sm text-pink-300 font-medium">Beauty Studio</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your ultimate destination for beauty, elegance, and confidence.
            Where artistry meets passion to enhance your natural beauty.
          </p>
          
          {/* Trust Badges */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="text-pink-800" size={16} />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="text-pink-800" size={16} />
              <span>Premium Quality Products</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="text-pink-800" size={16} />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-3">
            {[
              { icon: <Instagram size={20} />, label: "Instagram", color: "from-pink-800 to-purple-800" },
              { icon: <Facebook size={20} />, label: "Facebook", color: "from-pink-800 to-purple-800" },
              { icon: <Twitter size={20} />, label: "Twitter", color: "from-pink-800 to-purple-800" },
              { icon: <MailOpen size={20} />, label: "Email", color: "from-pink-800 to-purple-800" },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white hover:shadow-lg hover:scale-105 transition-all duration-300`}
                aria-label={social.label}
              >
                {social.icon}
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700 flex items-center gap-2">
            <Sparkles className="text-pink-400" size={20} />
            Our Services
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-200 py-1"
              >
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span>{service}</span>
              </Link>
            ))}
          </div>
          
          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hours & Contact Column */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700 flex items-center gap-2">
            <Clock className="text-pink-400" size={20} />
            Business Hours
          </h3>
          <ul className="space-y-3 mb-8">
            {businessHours.map((hours, idx) => (
              <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-800/50">
                <span className="text-gray-400">{hours.day}</span>
                <span className="font-medium text-white">{hours.hours}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700 flex items-center gap-2">
            <Phone className="text-pink-400" size={20} />
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-pink-400" size={18} />
              </div>
              <div>
                <div className="font-medium text-white">Our Location</div>
                <div className="text-gray-400 text-sm mt-1">
                  12 Zubby Street, Banex, Abuja, Nigeria
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-pink-400" size={18} />
              </div>
              <div>
                <div className="font-medium text-white">Call Us</div>
                <a 
                  href="tel:+2348123456789" 
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm mt-1 block"
                >
                  +234 000 000 0000
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-pink-400" size={18} />
              </div>
              <div>
                <div className="font-medium text-white">Email Us</div>
                <a 
                  href="mailto:info@zubbytouch.com" 
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm mt-1 block"
                >
                  info@zubbytouch.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700 flex items-center gap-2">
            <Send className="text-pink-400" size={20} />
            Stay Updated
          </h3>
          
          {isSubscribed ? (
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-400" size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Thank You!</h4>
              <p className="text-gray-300 text-sm">
                You've successfully subscribed to our newsletter.
                Check your inbox for beauty tips and exclusive offers!
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for beauty tips, exclusive offers, 
                and promotions delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to 
                receive updates from ZubbyTouch.
              </div>
            </>
          )}

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                About Us
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                Services
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                Gallery
              </Link>
              <Link to="/booking" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                Book Now
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 pt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ZubbyTouch Beauty Studio. All rights reserved.
              <span className="mx-2">•</span>
              <Link to="/privacy" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link to="/terms" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="flex justify-center mt-6 gap-6 opacity-75">
            <div className="text-xs text-gray-500">We accept:</div>
            <div className="flex gap-4">
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                VISA
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                MC
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                PAY
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                CASH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="-rotate-90" size={20} />
      </button>
    </footer>
  );
};

export default Footer;