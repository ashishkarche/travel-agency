import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-white/20 via-white/10 to-white/5 backdrop-blur-lg text-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Brand & Motto */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Shravni Tourist & Travels</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore Pune, Mumbai, Lonavala & more. Comfortable, reliable, and safe trips with verified drivers.  
            Your adventure starts here.
          </p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition text-gray-900">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition text-gray-900">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-500 transition relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-blue-500 transition relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt /> Pune, Maharashtra, India
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaPhoneAlt /> <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-500 transition">+91-XXXXXXXXXX</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaEnvelope /> <a href="mailto:info@shravnitours.com" className="hover:text-blue-500 transition">info@shravnitours.com</a>
          </div>
        </div>

        {/* CTA / WhatsApp */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Book a Trip</h4>
          <p className="text-gray-600 text-sm">Instant assistance via WhatsApp. Click below to start your booking.</p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition shadow-md"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/50 mt-10 text-center py-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Shravni Tourist & Travels — All rights reserved.
      </div>
    </footer>
  );
}
