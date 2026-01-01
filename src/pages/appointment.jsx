import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Scissors,
  Palette,
  Sparkles,
  Eye,
  Heart,
  Users,
  ChevronRight,
  CheckCircle,
  XCircle,
  MapPin,
  Phone,
  CreditCard,
  Shield,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  Star,
  Zap,
  TrendingUp
} from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Appointment = () => {
  // Form state
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    isNewClient: true,
  });
  const [appointmentType, setAppointmentType] = useState("in-salon");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  // Services data
  const services = [
    {
      id: 1,
      name: "Braiding",
      category: "Hair",
      price: "₦10,000 - ₦20,000",
      duration: "2-4 hours",
      description: "Protective styles, box braids, cornrows, twists",
      icon: <Scissors className="text-pink-500" />,
      popular: true,
      featured: true
    },
    {
      id: 2,
      name: "Makeup Artistry",
      category: "Face",
      price: "₦40,000 - ₦50,000",
      duration: "1-2 hours",
      description: "Bridal, special occasion, glam looks",
      icon: <Palette className="text-purple-500" />,
      popular: true,
      featured: true
    },
    {
      id: 3,
      name: "Wig Installation",
      category: "Hair",
      price: "₦15,000 - ₦20,000",
      duration: "1.5-3 hours",
      description: "Custom lace front, full lace installation",
      icon: <Sparkles className="text-blue-500" />,
      popular: false,
      featured: false
    },
    {
      id: 4,
      name: "Lash Extensions",
      category: "Eyes",
      price: "₦5,000 - ₦10,000",
      duration: "1.5-2.5 hours",
      description: "Classic, volume, hybrid, mega volume",
      icon: <Eye className="text-amber-500" />,
      popular: true,
      featured: true
    },
    {
      id: 5,
      name: "Nail Art & Design",
      category: "Nails",
      price: "₦10,000 - ₦20,000",
      duration: "45-90 mins",
      description: "Gel, acrylic, nail art, enhancements",
      icon: <Heart className="text-red-500" />,
      popular: false,
      featured: false
    },
    {
      id: 6,
      name: "Manicure",
      category: "Nails",
      price: "₦10,000 - ₦20,000",
      duration: "30-60 mins",
      description: "Regular, gel, dip powder finishes",
      icon: <TrendingUp className="text-green-500" />,
      popular: false,
      featured: false
    },
    {
      id: 7,
      name: "Pedicure",
      category: "Nails",
      price: "₦10,000 - ₦20,000",
      duration: "45-75 mins",
      description: "Spa pedicure with paraffin wax treatment",
      icon: <Heart className="text-teal-500" />,
      popular: true,
      featured: true
    },
    {
      id: 8,
      name: "Hair Coloring",
      category: "Hair",
      price: "₦10,000 - ₦20,000",
      duration: "2-5 hours",
      description: "Balayage, highlights, full color, creative color",
      icon: <Palette className="text-indigo-500" />,
      popular: true,
      featured: true
    },
  ];

  // Stylists data
  const stylists = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: ["Braiding", "Wig Installation"],
      experience: "8 years",
      rating: 4.9,
      available: true,
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200",
      description: "Master braider specializing in protective styles"
    },
    {
      id: 2,
      name: "Jessica Williams",
      specialty: ["Makeup Artistry", "Lash Extensions"],
      experience: "6 years",
      rating: 4.8,
      available: true,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200",
      description: "Bridal and editorial makeup expert"
    },
    {
      id: 3,
      name: "Maria Garcia",
      specialty: ["Hair Coloring", "Manicure", "Pedicure"],
      experience: "10 years",
      rating: 5.0,
      available: false,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w-200",
      description: "Color specialist and nail artist"
    },
    {
      id: 4,
      name: "Taylor Smith",
      specialty: ["All Services"],
      experience: "4 years",
      rating: 4.7,
      available: true,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200",
      description: "Versatile stylist available for all beauty services"
    },
  ];

  // Generate available dates (next 30 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) { // Skip Sundays
        dates.push(date);
      }
    }
    return dates;
  };

  // Time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  // Package deals
  const packageDeals = [
    {
      id: "pkg1",
      name: "Complete Glam Package",
      price: "₦450,000",
      originalPrice: "₦630,000",
      services: ["Makeup Artistry", "Lash Extensions", "Manicure"],
      duration: "4 hours",
      description: "Perfect for special occasions",
      featured: true
    },
    {
      id: "pkg2",
      name: "Hair Transformation",
      price: "₦525,000",
      originalPrice: "₦720,000",
      services: ["Hair Coloring", "Braiding", "Scalp Treatment"],
      duration: "5 hours",
      description: "Full hair makeover experience",
      featured: false
    },
    {
      id: "pkg3",
      name: "Spa Day",
      price: "₦270,000",
      originalPrice: "₦360,000",
      services: ["Manicure", "Pedicure", "Basic Makeup"],
      duration: "3 hours",
      description: "Ultimate relaxation package",
      featured: true
    },
  ];

  // Calculate total price
  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    // Extract numeric price from string like "₦75,000 - ₦225,000"
    const priceRange = selectedService.price.match(/₦([\d,]+)/g);
    if (priceRange) {
      const minPrice = parseInt(priceRange[0].replace('₦', '').replace(/,/g, ''));
      return minPrice; // Using minimum price for calculation
    }
    return 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setBookingError(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Check if all required fields are filled
    if (!selectedService || !selectedStylist || !selectedDate || !selectedTime || 
        !clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      setBookingError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    setIsConfirmed(true);

    // Generate confirmation number
    const confirmationNumber = Math.random().toString(36).substr(2, 8).toUpperCase();
    localStorage.setItem('lastConfirmation', confirmationNumber);
  };

  // Reset form
  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientInfo({
      name: "",
      email: "",
      phone: "",
      notes: "",
      isNewClient: true,
    });
    setIsConfirmed(false);
    setBookingError(null);
  };

  // Step navigation
  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Progress bar width
  const progressWidth = `${(step / 5) * 100}%`;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32">
      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((stepNum) => (
                <div
                  key={stepNum}
                  className={`flex items-center ${stepNum < 5 ? 'flex-1' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      stepNum <= step
                        ? "bg-pink-600 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 5 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                        stepNum < step ? "bg-pink-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: progressWidth }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Select Service</span>
            <span>Choose Stylist</span>
            <span>Pick Time</span>
            <span>Your Info</span>
            <span>Confirm</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2">
            {!isConfirmed ? (
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Book Your Appointment
                </h1>
                <p className="text-gray-600 mb-8">
                  Complete your booking in just 5 easy steps
                </p>

                {/* Error Message */}
                {bookingError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="text-red-500 mr-3" size={20} />
                    <span className="text-red-700">{bookingError}</span>
                  </div>
                )}

                {/* Step 1: Select Service */}
                {step === 1 && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <Scissors className="text-pink-600" size={20} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Select Service</h2>
                        <p className="text-gray-600">Choose the beauty service you need</p>
                      </div>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setSelectedService(service);
                            nextStep();
                          }}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group hover:shadow-lg ${
                            selectedService?.id === service.id
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 hover:border-pink-300"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <div className="p-2 bg-pink-300 rounded-lg mr-3 group-hover:bg-pink-100 transition-colors">
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-800">{service.name}</h3>
                                <span className="text-sm text-gray-500">{service.category}</span>
                              </div>
                            </div>
                            {service.popular && (
                              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-pink-600">{service.price}</span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock size={14} className="mr-1" />
                              {service.duration}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Package Deals */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        Package Deals (Save 20-30%)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {packageDeals.map((pkg) => (
                          <button
                            key={pkg.id}
                            onClick={() => {
                              // Handle package selection
                              setSelectedService({
                                ...pkg,
                                name: pkg.name,
                                price: pkg.price,
                                duration: pkg.duration,
                              });
                              nextStep();
                            }}
                            className={`p-5 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                              pkg.featured
                                ? "border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50"
                                : "border-gray-200 hover:border-pink-300"
                            }`}
                          >
                            {pkg.featured && (
                              <div className="absolute -top-2 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                BEST VALUE
                              </div>
                            )}
                            <h4 className="font-bold text-gray-800 mb-2">{pkg.name}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-xl font-bold text-amber-600">{pkg.price}</span>
                              <span className="text-sm text-gray-400 line-through ml-2">
                                {pkg.originalPrice}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                            <div className="text-xs text-gray-500">
                              Includes: {pkg.services.join(", ")}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Choose Stylist */}
                {step === 2 && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Users className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Choose Your Stylist</h2>
                        <p className="text-gray-600">Select an available beauty expert</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {stylists.map((stylist) => (
                        <button
                          key={stylist.id}
                          onClick={() => setSelectedStylist(stylist)}
                          disabled={!stylist.available}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                            selectedStylist?.id === stylist.id
                              ? "border-purple-500 bg-purple-50"
                              : stylist.available
                              ? "border-gray-200 hover:border-purple-300 hover:shadow-lg"
                              : "border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-start">
                            <img
                              src={stylist.image}
                              alt={stylist.name}
                              className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-bold text-gray-800">{stylist.name}</h3>
                                  <div className="flex items-center mt-1">
                                    <Star size={14} className="text-amber-500 mr-1" fill="currentColor" />
                                    <span className="text-sm font-medium">{stylist.rating}</span>
                                    <span className="text-xs text-gray-500 ml-2">
                                      ({stylist.experience} experience)
                                    </span>
                                  </div>
                                </div>
                                {!stylist.available && (
                                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                    Booked
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{stylist.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {stylist.specialty.map((spec, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!selectedStylist}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${
                          selectedStylist
                            ? "bg-pink-600 text-white hover:bg-pink-700"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Time */}
                {step === 3 && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Calendar className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Select Date & Time</h2>
                        <p className="text-gray-600">Choose your preferred appointment slot</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Date Selection */}
                      <div>
                        <h3 className="font-bold text-gray-800 mb-4">Select Date</h3>
                        <div className="grid grid-cols-7 gap-2 mb-6">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="text-center text-sm text-gray-500 py-2">
                              {day}
                            </div>
                          ))}
                          {generateDates().map((date) => {
                            const isSelected = selectedDate && 
                              date.toDateString() === selectedDate.toDateString();
                            return (
                              <button
                                key={date.toISOString()}
                                onClick={() => setSelectedDate(date)}
                                className={`p-3 rounded-lg transition-all ${
                                  isSelected
                                    ? "bg-pink-600 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                }`}
                              >
                                {date.getDate()}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <h3 className="font-bold text-gray-800 mb-4">
                          Available Times {selectedDate && `for ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}`}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                selectedTime === time
                                  ? "border-pink-500 bg-pink-50"
                                  : "border-gray-200 hover:border-pink-300"
                              }`}
                            >
                              <div className="flex items-center justify-center">
                                <Clock size={16} className="mr-2" />
                                {time}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!selectedDate || !selectedTime}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${
                          selectedDate && selectedTime
                            ? "bg-pink-600 text-white hover:bg-pink-700"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Client Information */}
                {step === 4 && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <User className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Your Information</h2>
                        <p className="text-gray-600">Tell us about yourself</p>
                      </div>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={clientInfo.name}
                            onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={clientInfo.email}
                            onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={clientInfo.phone}
                            onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                            placeholder="(555) 123-4567"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Are you a new client? *
                          </label>
                          <div className="flex space-x-4">
                            {[true, false].map((isNew) => (
                              <button
                                key={isNew}
                                type="button"
                                onClick={() => setClientInfo({...clientInfo, isNewClient: isNew})}
                                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                                  clientInfo.isNewClient === isNew
                                    ? "border-pink-500 bg-pink-50 text-pink-700"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                              >
                                {isNew ? "Yes, First Visit" : "Returning Client"}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          value={clientInfo.notes}
                          onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                          placeholder="Any special requests, allergies, or concerns?"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1"
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          I agree to the cancellation policy (24-hour notice required) and 
                          understand that a 50% deposit may be charged for late cancellations.
                        </label>
                      </div>
                    </form>

                    <div className="flex justify-between mt-8">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        className="px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all"
                      >
                        Review & Confirm
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 5: Confirmation */}
                {step === 5 && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="text-amber-600" size={20} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Review & Confirm</h2>
                        <p className="text-gray-600">Please review your appointment details</p>
                      </div>
                    </div>

                    {/* Appointment Summary */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h3 className="font-bold text-lg text-gray-800 mb-4">Appointment Summary</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Service</span>
                          <span className="font-bold text-gray-800">{selectedService?.name}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Stylist</span>
                          <span className="font-bold text-gray-800">{selectedStylist?.name}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Date & Time</span>
                          <span className="font-bold text-gray-800">
                            {selectedDate?.toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}, {selectedTime}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-bold text-gray-800">{selectedService?.duration}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Client Type</span>
                          <span className="font-bold text-gray-800">
                            {clientInfo.isNewClient ? "New Client" : "Returning Client"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pt-3">
                          <span className="text-lg font-bold text-gray-800">Estimated Total</span>
                          <span className="text-2xl font-bold text-pink-600">
                            {selectedService?.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8">
                      <h3 className="font-bold text-lg text-gray-800 mb-4">Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: "pay-later", label: "Pay at Salon", icon: "💳" },
                          { id: "deposit", label: "50% Deposit", icon: "💰" },
                          { id: "full", label: "Pay Now", icon: "💎" },
                        ].map((method) => (
                          <label
                            key={method.id}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              appointmentType === method.id
                                ? "border-pink-500 bg-pink-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={method.id}
                              checked={appointmentType === method.id}
                              onChange={(e) => setAppointmentType(e.target.value)}
                              className="sr-only"
                            />
                            <div className="text-2xl mb-2">{method.icon}</div>
                            <div className="font-medium">{method.label}</div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className={`px-8 py-3 rounded-full font-medium transition-all flex items-center ${
                          isLoading
                            ? "bg-pink-400 cursor-not-allowed"
                            : "bg-pink-600 hover:bg-pink-700"
                        } text-white`}
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Confirm Appointment
                            <ChevronRight size={20} className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Confirmation Success Screen */
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Appointment Confirmed!
                </h2>
                
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your appointment has been successfully booked. We've sent a confirmation 
                  email with all the details.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                  <div className="text-sm text-gray-500 mb-2">Confirmation Number</div>
                  <div className="text-2xl font-bold text-pink-600 mb-4">
                    ZT{Math.random().toString(36).substr(2, 8).toUpperCase()}
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stylist:</span>
                      <span className="font-medium">{selectedStylist?.name}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-all"
                  >
                    Print Confirmation
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all"
                  >
                    Book Another Appointment
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p className="mb-2">📧 Check your email for the confirmation</p>
                  <p>📱 Save this confirmation number for future reference</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Summary & Info */}
          <div className="space-y-6">
            {/* Appointment Summary Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Appointment Summary</h3>
              
              {selectedService ? (
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-gray-800">{selectedService.name}</div>
                      <div className="text-sm text-gray-500">{selectedService.duration}</div>
                    </div>
                    <div className="font-bold text-pink-600">{selectedService.price}</div>
                  </div>
                  
                  {selectedStylist && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">With Stylist</div>
                      <div className="flex items-center">
                        <img
                          src={selectedStylist.image}
                          alt={selectedStylist.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium">{selectedStylist.name}</div>
                          <div className="text-xs text-gray-500">⭐ {selectedStylist.rating}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedDate && selectedTime && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">Date & Time</div>
                      <div className="font-medium">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}, {selectedTime}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">Estimated Total</span>
                      <span className="text-xl font-bold text-pink-600">
                        {selectedService.price}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      * Final price may vary based on service requirements
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>Select a service to see appointment details</p>
                </div>
              )}
            </div>

            {/* Important Information Card */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="text-pink-600 mr-2" size={20} />
                Important Information
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock size={16} className="text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Please arrive 10 minutes before your appointment</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle size={16} className="text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">24-hour cancellation policy applies</span>
                </li>
                <li className="flex items-start">
                  <CreditCard size={16} className="text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">We accept all major credit cards</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare size={16} className="text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Contact us for group bookings (3+ people)</span>
                </li>
              </ul>
            </div>

            {/* Need Help Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">Need Help?</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={18} className="text-gray-600 mr-3" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-gray-500">(555) 123-4567</div>
                  </div>
                </a>
                
                <a
                  href="mailto:bookings@zubbysalon.com"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail size={18} className="text-gray-600 mr-3" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm text-gray-500">bookings@zubbysalon.com</div>
                  </div>
                </a>
                
                <a
                  href="/contact"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <MapPin size={18} className="text-gray-600 mr-3" />
                  <div>
                    <div className="font-medium">Visit Us</div>
                    <div className="text-sm text-gray-500">123 Beauty Avenue, NY</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Appointment;