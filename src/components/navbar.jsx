import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X, Calendar } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  // Handle body overflow and keyboard navigation when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-menu-open", "true");
      
      // Trap focus within mobile menu when open
      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          const focusableElements = document.querySelectorAll(
            '#mobile-menu button, #mobile-menu [href], #mobile-menu input, #mobile-menu select, #mobile-menu textarea, #mobile-menu [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      document.addEventListener("keydown", handleTabKey);
      return () => document.removeEventListener("keydown", handleTabKey);
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-menu-open");
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-menu-open");
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  const handleEscapeKey = useCallback((e) => {
    if (e.key === "Escape" && isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey]);

  const navClasses = useMemo(() => 
    `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
        : "bg-white/95 backdrop-blur-md py-4"
    }`
  , [scrolled]);

  return (
    <>
      <nav
        className={navClasses}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="/"
              className="flex-shrink-0 font-bold text-2xl tracking-wide focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 rounded"
              aria-label="ZubbyTouch Home"
            >
              <span className="text-pink-600">Zubby</span>
              <span className="text-gray-800">Touch</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <ul className="flex space-x-8 text-gray-700 font-medium">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative group py-2 focus:outline-none"
                    >
                      <span className="text-gray-700 group-hover:text-pink-600 transition-colors duration-200">
                        {link.name}
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full group-focus:w-full" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <a
                href="/appointment"
                className="flex items-center justify-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-600/20 hover:shadow-pink-600/30 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              >
                <Calendar size={18} aria-hidden="true" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => isOpen ? closeMenu() : setIsOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 rounded-full transition-transform active:scale-90"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && !isClosing && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-300 opacity-100"
            onClick={closeMenu}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Sidebar */}
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out md:hidden translate-x-0"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Close button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded-full"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-600"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer section */}
              <div className="pt-6 pb-8 border-t border-gray-100">
                <a
                  href="/appointment"
                  onClick={closeMenu}
                  className="w-full flex justify-center items-center gap-2 bg-pink-600 text-white py-3.5 text-base rounded-lg font-bold hover:bg-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                >
                  <Calendar size={20} aria-hidden="true" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;