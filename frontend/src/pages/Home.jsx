import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import { FaWhatsapp, FaPhoneAlt, FaStar } from "react-icons/fa";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Shravni Tourist & Travels",
  "url": "https://yourdomain.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  }
};

export default function Home() {
  const popularPackages = [
    { name: "Pune → Mumbai Airport Drop", price: "From ₹2,500", img: "/assets/mumbai.webp" },
    { name: "Pune → Lonavala Sightseeing", price: "From ₹1,800", img: "/assets/lonavala.webp" },
    { name: "Custom Outstation Cab", price: "Flexible Pricing", img: "/assets/custom.webp" }
  ];

  const whyChoose = [
    { title: "Verified Drivers", desc: "Polite & experienced drivers for safe travel." },
    { title: "Transparent Pricing", desc: "No hidden charges, full clarity upfront." },
    { title: "Clean, Sanitized Cars", desc: "Comfortable rides with hygiene focus." }
  ];

  return (
    <>
      <SeoHead
        title="Shravni Tourist & Travels | Pune’s Trusted Travel Partner"
        description="Affordable Pune to Mumbai, Lonavala and Maharashtra travel packages with clean cars and verified experienced drivers."
        url="https://yourdomain.com"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative px-6 py-32 text-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <ImageWithSkeleton
          src="/assets/hero-bg.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full opacity-10 -z-10"
        />
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-fadeIn">
            Travel Comfortably.<br />Travel Confidently.
          </h1>
          <p className="mt-5 text-gray-600 text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
            Trusted Pune-based travel service for airport drops, Lonavala sightseeing, and curated outstation trips.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/packages"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-sm md:text-base font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Explore Packages
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Shravni%20Tours"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-sm md:text-base hover:bg-gray-100 transition"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Routes</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularPackages.map((pkg, i) => (
            <div key={i} className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white">
              <ImageWithSkeleton src={pkg.img} alt={pkg.name} className="w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.price}</p>
              </div>
              <Link
                to="/packages"
                className="absolute bottom-4 right-4 px-5 py-2 text-sm rounded-full bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:from-black hover:to-gray-800 transition"
              >
                View
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/packages" className="inline-block px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            Browse All Packages →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose Shravni?</h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          {whyChoose.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gradient-to-r from-white to-blue-50 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {[1, 2].map((_, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Smooth booking experience and polite driver. Highly recommended!”
              </p>
              <p className="mt-4 font-medium text-gray-900">— Verified Customer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Call or WhatsApp now and get instant booking assistance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition font-medium"
          >
            <FaPhoneAlt /> Call Now
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Shravni%20Tours"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition font-medium"
          >
            <FaWhatsapp /> WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
