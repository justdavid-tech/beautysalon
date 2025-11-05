import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Braiding",
    review:
      "I absolutely love my braids! They were neat, stylish, and lasted for weeks. The salon atmosphere was so relaxing too.",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 5,
  },
  {
    name: "Amaka Eze",
    service: "Makeup & Lashes",
    review:
      "The makeup artist transformed me completely! My lashes and makeup looked flawless all day. Highly recommend!",
    image: "https://i.pravatar.cc/100?img=36",
    rating: 5,
  },
  {
    name: "Tola Adedeji",
    service: "Nail Fixing",
    review:
      "Their nail work is top-tier. The attention to detail and the designs were stunning. I got so many compliments!",
    image: "https://i.pravatar.cc/100?img=52",
    rating: 4,
  },
  {
    name: "Joy Okafor",
    service: "Wig Installation",
    review:
      "Best salon experience ever! My wig was installed so naturally that even I couldn’t tell it wasn’t my real hair.",
    image: "https://i.pravatar.cc/100?img=58",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-pink-500">Clients Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from our beautiful clients who trusted us to make them shine.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 text-left flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-pink-500 mb-2">{item.service}</p>

              <div className="flex mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm italic mb-3 text-center">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
