import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutsideClick = (e) => {
      if (!e.target.closest("#mobile-menu") && !e.target.closest("#hamburger-btn")) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg h-16"
            : "bg-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
          {/* Logo + Tagline */}
          <Link
            to="/"
            className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2 transform transition hover:scale-105"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Shravni Tourist & Travels
            </span>
            <span className="text-xs md:text-sm text-gray-500 mt-1 md:mt-0">
              Trusted Pune Travel
            </span>
          </Link>

          {/* Desktop Nav + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-gray-700 hover:text-gray-900 transition ${
                    location.pathname === link.path
                      ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-600 after:mt-1"
                      : "after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:mt-1 hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
              >
                <FaPhoneAlt /> Call
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="hamburger-btn"
            className="md:hidden p-2 text-gray-700 rounded hover:bg-gray-100 transition z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg transition-transform duration-300 transform flex flex-col ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-2 p-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 px-4 rounded hover:bg-gray-100 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="flex flex-col gap-2 p-6 border-t border-gray-200">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
            >
              <FaPhoneAlt /> Call
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- Floating WhatsApp Button ---------------- */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}
