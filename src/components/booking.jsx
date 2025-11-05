import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;

    if (!name || !phone || !service) {
      alert("Please fill in all required fields!");
      return;
    }

    // Format message for WhatsApp
    const text = `Hello! 👋\nI’d like to book a service.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message || "N/A"}`;

    // Replace with your salon’s WhatsApp number (include country code, no +)
    const whatsappNumber = "2348123456789"; // Example: 2348123456789 for +234 812 345 6789

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp chat
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book an <span className="text-pink-500">Appointment</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Ready for a beauty transformation? Fill in your details below to book
          your session via WhatsApp 💅
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-pink-50 rounded-2xl p-8 shadow-md text-left space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Service <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
              required
            >
              <option value="">-- Choose a Service --</option>
              <option>Braiding</option>
              <option>Nail Fixing</option>
              <option>Makeup</option>
              <option>Wig Installation</option>
              <option>Lash Extensions</option>
              <option>Manicure</option>
              <option>Pedicure</option>
              <option>Hair Dying</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              placeholder="Any extra details?"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none resize-none"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
