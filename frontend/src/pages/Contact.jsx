import SeoHead from "../components/SeoHead";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact | Shravni Tourist & Travels"
        description="Contact Shravni Tourist & Travels for Pune to Mumbai and Lonavala trips."
        url="https://yourdomain.com/contact"
      />

      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Have questions or want to book your trip? Reach out to us via call, WhatsApp, or email. We respond promptly!
        </p>

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Phone */}
          <div className="flex items-center gap-4 p-6 border rounded-xl hover:shadow-md transition">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <a href="tel:+91XXXXXXXXXX" className="text-gray-700 hover:text-blue-600 transition">
                +91-XXXXXXXXXX
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 p-6 border rounded-xl hover:shadow-md transition">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%20Shravni%20Tours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Message us
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-6 border rounded-xl hover:shadow-md transition">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:info@shravnitours.com"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                info@shravnitours.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-6 border rounded-xl hover:shadow-md transition">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-gray-700">Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Optional Map Placeholder */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.XXXXXXX!2d73.XXXX!3d18.XXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbXXXX:0xXXXXXX!2sPune,+Maharashtra,+India!5e0!3m2!1sen!2sin!4vXXXXXXXXXXXX"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl border"
          ></iframe>
        </div>
      </section>
    </>
  );
}
