import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
      <>
      {/* SEO Metadata */}
      <Helmet>
        <title>About Glow & Grace</title>
        <meta
          name="description"
          content="Discover Galamour Touch— your go-to beauty destination for professional braiding, makeup, lashes, and nails. Learn about our story, team, and passion for elegance."
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <section className="py-24 bg-white text-gray-800 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-pink-500">Glow & Grace</span>
          </h1>
          <p className="text-lg text-gray-600">
            Where beauty meets creativity, care, and confidence.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <p>
            Glow & Grace started with one mission — to help individuals embrace
            their natural beauty while expressing their unique style. Our team
            of expert stylists, makeup artists, and nail technicians has years
            of experience turning visions into reality.
          </p>
          <p>
            Every detail in our salon is designed to make you feel comfortable,
            pampered, and confident. From the moment you walk in, our focus is
            on delivering exceptional service, personalized attention, and
            flawless results.
          </p>
          <p>
            Whether it’s a wedding, photoshoot, or a simple self-care day — Glow
            & Grace is your home of beauty, creativity, and class.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
