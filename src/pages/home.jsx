import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero"; 
import About from "../components/about";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonies";
import Booking from "../components/booking";
import Location from "../components/location";
import Footer from "../components/footer";


function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Location />
        <Footer />
        </>
    );
}

export default Home;