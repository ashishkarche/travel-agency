import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeoHead from "../components/SeoHead";
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/packages/${id}`)
      .then((res) => setPkg(res.data))
      .catch(() => {
        setPkg({
          title: "Sample Package",
          slug: "sample-package",
          short: "Short description of the package",
          image: "/assets/sample.webp",
          price: 2500,
          itinerary: "Itinerary details will be provided.",
          location: "Pune → Mumbai",
        });
      });
  }, [id]);

  if (!pkg) {
    return <div className="py-24 text-center text-gray-600">Loading...</div>;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.short,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <SeoHead
        title={`${pkg.title} | Shravni Tourist & Travels`}
        description={pkg.short}
        url={`https://yourdomain.com/packages/${pkg.slug}`}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <ImageWithSkeleton
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {pkg.title}
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">{pkg.short}</p>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Left Info */}
        <div className="space-y-6 col-span-2">
          <div className="flex items-center gap-2 text-blue-600 font-medium text-sm uppercase">
            <FaMapMarkerAlt /> {pkg.location}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{pkg.title}</h2>
          <p className="text-gray-700 leading-relaxed">{pkg.itinerary}</p>

          {/* Features / Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="p-4 rounded-2xl bg-blue-50 flex flex-col items-center justify-center shadow hover:shadow-lg transition">
              <FaWhatsapp className="text-green-500 text-2xl mb-2" />
              <span className="text-sm font-medium">Instant Booking</span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 flex flex-col items-center justify-center shadow hover:shadow-lg transition">
              <FaCalendarAlt className="text-gray-600 text-2xl mb-2" />
              <span className="text-sm font-medium">Flexible Dates</span>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="relative">
          <div className="sticky top-20 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg space-y-6">
            <div className="text-3xl font-bold text-gray-900">
              {pkg.price === 0 ? "Custom Pricing" : `₹${pkg.price}`}
            </div>
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20book%20${encodeURIComponent(pkg.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
            >
              <FaWhatsapp /> Book via WhatsApp
            </a>

            {/* Booking Form */}
            <form method="post" action="/api/bookings" className="space-y-4">
              <input type="hidden" name="packageSlug" value={pkg.slug} />
              <input
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
                required
              />
              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
                required
              />
              <div className="relative">
                <input
                  name="date"
                  type="date"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
                  required
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:opacity-90 transition"
              >
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Why Choose This Package?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow hover:shadow-xl transition flex flex-col items-center">
            <FaWhatsapp className="text-green-500 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Support</h3>
            <p className="text-gray-600 text-center text-sm">Get fast assistance through WhatsApp or call anytime.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow hover:shadow-xl transition flex flex-col items-center">
            <FaCalendarAlt className="text-gray-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Dates</h3>
            <p className="text-gray-600 text-center text-sm">Book according to your convenience without stress.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow hover:shadow-xl transition flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Verified Locations</h3>
            <p className="text-gray-600 text-center text-sm">We ensure safe and verified travel routes.</p>
          </div>
        </div>
      </section>
    </>
  );
}
