import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Instagram,
  Facebook,
  Calendar,
  Navigation
} from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-pink-500" size={24} />,
      title: "Visit Our Salon",
      details: ["123 Beauty Avenue", "New York, NY 10001", "2nd Floor, Suite 201"],
      action: {
        text: "Get Directions",
        href: "https://maps.google.com",
        icon: <Navigation size={16} />
      }
    },
    {
      icon: <Phone className="text-purple-500" size={24} />,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
      note: "Calls answered during business hours",
      action: {
        text: "Call Now",
        href: "tel:+15551234567",
        icon: <Phone size={16} />
      }
    },
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email Us",
      details: ["hello@zubbysalon.com", "bookings@zubbysalon.com"],
      note: "Response within 24 hours",
      action: {
        text: "Send Email",
        href: "mailto:hello@zubbysalon.com",
        icon: <Mail size={16} />
      }
    },
    {
      icon: <Clock className="text-green-500" size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 8:00 PM",
        "Saturday: 8:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM"
      ],
      note: "Last appointment 1 hour before closing",
      action: {
        text: "View Services",
        href: "/services",
        icon: <Calendar size={16} />
      }
    },
  ];

  const faqs = [
    {
      question: "Do you offer wedding party packages?",
      answer: "Yes! We specialize in bridal parties. Contact us for custom packages for bridesmaids, mother of the bride, and bridal prep services."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for cancellations. Late cancellations may incur a 50% fee. No-shows will be charged the full service amount."
    },
    {
      question: "Do you have parking available?",
      answer: "We have limited parking behind the salon. Street parking is also available. Valet parking can be arranged for special events."
    },
    {
      question: "Are you currently hiring?",
      answer: "We're always looking for talented professionals. Please email your resume to careers@zubbysalon.com"
    },
    {
      question: "Do you accept walk-ins?",
      answer: "We recommend appointments to ensure availability, but we do accept walk-ins based on stylist availability."
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We're here to help! Reach out for questions, feedback, or just to say hello
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "contact"
                  ? "bg-white text-pink-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Contact Info
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "faq"
                  ? "bg-white text-pink-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab("map")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "map"
                  ? "bg-white text-pink-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Find Us
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards & Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-gray-50 rounded-xl mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.note && (
                          <p className="text-sm text-gray-500 mt-2">
                            {info.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <a
                      href={info.action.href}
                      className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 mt-4"
                    >
                      {info.action.icon}
                      <span className="ml-2">{info.action.text}</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-xl mb-4">
                  Follow Us on Social Media
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest styles, promotions, and beauty tips
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 11.14-4.13v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.32-.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-8">
                  <MessageSquare className="text-pink-600 mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Send Us a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-pink-600 font-medium hover:text-pink-700"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="booking">Booking Question</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="feedback">Feedback/Suggestion</option>
                          <option value="career">Career Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      />
                      <label htmlFor="newsletter" className="ml-2 text-gray-600">
                        Subscribe to our newsletter for beauty tips and promotions
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                        isSubmitting
                          ? "bg-pink-400 cursor-not-allowed"
                          : "bg-pink-600 hover:bg-pink-700 transform hover:-translate-y-1"
                      } text-white shadow-lg hover:shadow-xl`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-3" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                      We typically respond within 24 hours during business days
                    </p>
                  </form>
                )}
              </div>

              {/* Quick Book CTA */}
              <div className="mt-8 bg-black rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Book an Appointment?
                </h3>
                <p className="mb-6 opacity-90">
                  Skip the wait and book directly with our online system
                </p>
                <a
                  href="/book-now"
                  className="inline-flex items-center bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg"
                >
                  <Calendar size={20} className="mr-2" />
                  Book Appointment Now
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-pink-200 transition-colors"
                >
                  <h3 className="font-bold text-lg text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Find Our Salon
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {/* Map Container */}
                  <div className="h-96 bg-gray-200 rounded-xl overflow-hidden relative">
                    {/* Mock Map - Replace with actual Google Maps embed */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <MapPin className="text-white" size={32} />
                        </div>
                        <p className="text-gray-700 font-medium">
                          Interactive Map Would Appear Here
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          Google Maps integration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">
                    Getting Here
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-pink-100 p-2 rounded-lg mr-3">
                        <Navigation className="text-pink-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Parking</p>
                        <p className="text-gray-600 text-sm">Free parking behind building</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <MapPin className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Public Transport</p>
                        <p className="text-gray-600 text-sm">Subway: 5th Ave Station (A, C lines)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Clock className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Accessibility</p>
                        <p className="text-gray-600 text-sm">Wheelchair accessible entrance</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition-colors"
                    >
                      <Navigation size={20} className="mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. Our team is always happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} className="mr-3" />
              Call Us Now
            </a>
            <a
              href="mailto:hello@zubbysalon.com"
              className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-lg border border-pink-200"
            >
              <Mail size={20} className="mr-3" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Contact;