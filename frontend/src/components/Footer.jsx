import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t shadow-inner mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-gray-900">Shravni Tourist & Travels</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Trusted cab services for Airport Transfers, Outstation Trips &
            Maharashtra tourism. Clean cars, verified drivers, and affordable pricing.
          </p>

          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaFacebookF size={18} className="text-gray-700" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaInstagram size={18} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Pune, Maharashtra, India
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-600">
                +91-XXXXXXXXXX
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@shravnitours.com"
                className="hover:text-blue-600"
              >
                info@shravnitours.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Book a Cab</h4>
          <p className="text-gray-600 text-sm mb-4">
            Chat with us for instant booking and quick support.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition shadow-sm"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t bg-gray-50 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shravni Tourist & Travels • All Rights Reserved
      </div>
    </footer>
  );
}
