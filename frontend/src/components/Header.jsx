// Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPackagesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const nav = [
    { name: "Home", path: "/" },
    {
      name: "Packages",
      dropdown: [
        { title: "Pune → Mumbai", path: "/packages?pune-mumbai" },
        { title: "Shirdi Temple", path: "/packages?shirdi" },
        { title: "Tirupati Darshan", path: "/packages?tirupati" },
        { title: "Weekend Getaways", path: "/packages?weekend" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (p) =>
    location.pathname === p ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <>
      {/* Header */}
      <header
        className={`fixed inset-x-4 top-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/90 shadow-xl"
            : "backdrop-blur-sm bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md">
                ✈️
              </div>
              <div className="leading-tight">
                <div className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">
                  Shravni Travels
                </div>
                <div className="text-xs text-gray-500 group-hover:text-blue-600 transition">
                  Explore. Discover. Travel.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 px-2">
              {nav.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setPackagesOpen(true)}
                    onMouseLeave={() => setPackagesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm md:text-base ${
                        packagesOpen ? "text-blue-600" : "text-gray-700"
                      } hover:text-blue-600 transition`}
                    >
                      {item.name} <FaChevronDown className="ml-1" size={12} />
                    </button>

                    {/* Mega-dropdown */}
                    <div
                      className={`absolute top-10 left-0 w-72 rounded-xl border border-gray-100 bg-white shadow-lg py-3 px-2 transition-all duration-200 ${
                        packagesOpen
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.title}
                          to={d.path}
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                        >
                          <FaMapMarkerAlt className="text-blue-500 w-4 h-4" />
                          <span>{d.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group text-sm md:text-base ${isActive(
                      item.path
                    )}`}
                  >
                    <span className="inline-block py-1">{item.name}</span>
                    <span className="absolute left-0 right-0 h-[2px] bg-blue-600 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              )}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+91XXXXXXXXXX"
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200 transition"
              >
                <FaPhoneAlt /> <span className="hidden lg:inline">Call</span>
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-green-50 text-green-700 text-sm hover:bg-green-100 transition"
              >
                <FaWhatsapp />{" "}
                <span className="hidden lg:inline">WhatsApp</span>
              </a>

              <Link
                to="/book"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <FaCalendarAlt /> Book Now
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpenDrawer(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <FaBars size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {/* New Mobile Bottom Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all ${
          openDrawer ? "visible" : "invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            openDrawer ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenDrawer(false)}
        />

        {/* Bottom Sheet Drawer */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-2xl p-6 transition-transform duration-300 ${
            openDrawer ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Top Grab Handle */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-5" />

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
              ✈️
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                Shravni Travels
              </div>
              <div className="text-xs text-gray-500">
                Explore. Discover. Travel.
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            {nav.map((item) =>
              item.dropdown ? (
                <details key={item.name} className="group">
                  <summary className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-100 cursor-pointer text-lg font-semibold">
                    {item.name}
                    <FaChevronDown />
                  </summary>
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.title}
                        to={d.path}
                        onClick={() => setOpenDrawer(false)}
                        className="block px-4 py-3 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100"
                      >
                        {d.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpenDrawer(false)}
                  className="block px-4 py-3 rounded-xl bg-gray-100 text-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Footer CTAs */}
          <div className="mt-6 space-y-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-blue-600 text-white font-semibold"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 text-white font-semibold"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <Link
              to="/book"
              onClick={() => setOpenDrawer(false)}
              className="block w-full py-3 rounded-full text-center border border-gray-300 font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
