import Home from "./pages/home";
import About from "./components/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Appointment from "./pages/appointment";


import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/appointment" element={<Appointment />} />
    </Routes>
    </>
  );
}

export default App;

