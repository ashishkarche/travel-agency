import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import { FaWhatsapp, FaPhoneAlt, FaStar } from "react-icons/fa";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { useState, useEffect } from "react";

import {
  MapPin,
  Navigation,
  Calendar,
  Car,
  Search,
  Phone,
  MessageCircle,
  Repeat,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Shravni Tourist & Travels",
  url: "https://yourdomain.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [slideWidth, setSlideWidth] = useState(100);

  const [selectedVehicle, setSelectedVehicle] = useState("");
  
  useEffect(() => {
    const getWidth = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 25;
      if (w >= 768) return 33.33;
      if (w >= 640) return 50;
      return 100;
    };
    setSlideWidth(getWidth());
    window.addEventListener("resize", () => setSlideWidth(getWidth()));
    return () =>
      window.removeEventListener("resize", () => setSlideWidth(getWidth()));
  }, []);

  // Slide animation when vehicle is selected
  useEffect(() => {
    if (!selectedVehicle) return;
    const index = popularPackages.findIndex(
      (pkg) => pkg.vehicle === selectedVehicle
    );
    if (index !== -1) {
      setCurrentSlide(index);
    }
  }, [selectedVehicle]);

  const popularPackages = [
    {
      name: "Pune → Mumbai Airport Drop",
      price: "From ₹2,500",
      img: "/assets/mumbai.webp",
    },
    {
      name: "Pune → Lonavala Sightseeing",
      price: "From ₹1,800",
      img: "/assets/lonavala.webp",
    },
    {
      name: "Custom Outstation Cab",
      price: "Flexible Pricing",
      img: "/assets/custom.webp",
    },
  ];

  const whyChoose = [
    {
      title: "Verified Drivers",
      desc: "Polite & experienced drivers for safe travel.",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges, full clarity upfront.",
    },
    {
      title: "Clean, Sanitized Cars",
      desc: "Comfortable rides with hygiene focus.",
    },
  ];

  useEffect(() => {
    const getWidth = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 25;
      if (w >= 768) return 33.33;
      if (w >= 640) return 50;
      return 100;
    };

    setSlideWidth(getWidth());

    window.addEventListener("resize", () => setSlideWidth(getWidth()));
    return () =>
      window.removeEventListener("resize", () => setSlideWidth(getWidth()));
  }, []);


  return (
    <>
      <SeoHead
        title="Shravni Tourist & Travels | Pune’s Trusted Travel Partner"
        description="Affordable Pune to Mumbai, Lonavala and Maharashtra travel packages with clean cars and verified experienced drivers."
        url="https://yourdomain.com"
        schema={schema}
      />

      <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between h-full py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:pr-12">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Travel Comfortably.
              <br />
              Travel Confidently.
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Airport Transfers • Outstation Trips • Pune Local Packages • 24/7
              Assistance
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-gray-300 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 font-semibold"
              >
                <MessageCircle className="w-5 h-5 text-green-600" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end mb-12 lg:mb-0">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 w-full max-w-md transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
              <form className="grid gap-4">
                {/* Pickup */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 group-focus-within:border-blue-500"
                  />
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-300 group-focus-within:scale-110 group-focus-within:text-blue-700" />
                </div>

                {/* Drop */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Drop Location"
                    className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-blue-600 outline-none transition-all duration-300 group-focus-within:border-blue-600"
                  />
                  <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-300 group-focus-within:scale-110 group-focus-within:text-blue-700" />
                </div>

                {/* Vehicle */}
                <div className="relative group">
                  <select
                    className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-blue-600 outline-none cursor-pointer transition-all duration-300 bg-white appearance-none hover:bg-blue-50"
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    value={selectedVehicle}
                  >
                    <option value="">Choose Vehicle</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV / Innova">SUV / Innova</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                  </select>
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-300 group-focus-within:scale-110 group-focus-within:text-blue-700" />
                </div>

                {/* Search Button */}
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2">
                  <Search className="w-5 h-5 animate-bounce" /> Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Popular Routes
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularPackages.map((pkg, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
            >
              <ImageWithSkeleton
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-64"
              />
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
          <Link
            to="/packages"
            className="inline-block px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Browse All Packages →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Shravni?
        </h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-to-r from-white to-blue-50 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Auto-Sliding Carousel for Packages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Packages
        </h2>

        <div className="relative overflow-hidden">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}%)`,
            }}
          >
            {popularPackages.map((pkg, i) => (
              <div
                key={i}
                className="
            flex-shrink-0 
            px-3
            w-full 
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4
          "
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <ImageWithSkeleton
                      src={pkg.img}
                      alt={pkg.name}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.price}</p>

                    <Link
                      to="/packages"
                      className="
                  inline-block 
                  mt-3 
                  px-5 py-2 
                  rounded-full 
                  bg-gradient-to-r from-blue-600 to-blue-700
                  text-white 
                  shadow-md 
                  hover:shadow-lg 
                  hover:scale-105
                  transition
                "
                    >
                      Explore Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">{/* no dots */}</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Customer Reviews
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Smooth booking experience and polite driver. Highly
                recommended!”
              </p>
              <p className="mt-4 font-medium text-gray-900">
                — Verified Customer
              </p>
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
