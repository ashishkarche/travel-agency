// src/pages/AboutUs.jsx

import {
  FaCheckCircle,
  FaCarSide,
  FaUserShield,
  FaClock,
} from "react-icons/fa";
import SeoHead from "../components/SeoHead";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

import AboutHero from "./AboutHero";

export default function AboutUs() {
  return (
    <>
      <SeoHead
        title="About Us | Shravni Tourist & Travels – Pune Travel Services"
        description="Shravni Tourist & Travels offers safe, comfortable and affordable transportation in Pune. Learn about our mission, services, and why travelers trust us for Pune to Mumbai, Lonavala, Shirdi, Mahabaleshwar and more."
        url="https://your-domain.com/about"
        keywords="Pune travels, Pune tourist cab, Pune to Mumbai taxi, Pune to Shirdi cab, Pune sightseeing cab, tourist travels Pune, outstation cabs Pune"
        image="https://your-domain.com/og-image.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Shravni Tourist & Travels",
          url: "https://your-domain.com",
          image: "https://your-domain.com/og-image.jpg",
          description:
            "Shravni Tourist & Travels provides premium tourist travel services in Pune including Pune to Mumbai, Lonavala, Mahabaleshwar, Shirdi and more.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "India",
          },
          telephone: "+91XXXXXXXXXX",
          sameAs: ["https://facebook.com/", "https://instagram.com/"],
        }}
      />

      {/* Hero Section */}
      <AboutHero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Who We Are */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0">
            {/* Image */}
            <div className="flex-1">
              <ImageWithSkeleton
                src="/assets/about-us-1.jpg"
                alt="About Shravni Tourist"
                className="w-full rounded-3xl shadow-lg h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                Shravni Tourist & Travels is more than a travel service — it's a promise of care, comfort, and trust. Based in Pune, we have built our reputation by delivering journeys that feel effortless and memorable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every trip we operate reflects our values: <span className="font-medium text-gray-900">professionalism, punctuality, transparency, and comfort.</span> These aren’t just features — they are the foundation of who we are as a travel brand.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
              Our vision is simple — to redefine travel comfort in Maharashtra. We want every passenger to feel the difference: cleaner cars, smoother rides, verified drivers, and a truly customer-first experience. A journey with us should never feel like a mere transfer; it should feel like part of your story.
            </p>
          </div>

          {/* Strengths */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center md:text-left">
              What Makes Us Different
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white text-center md:text-left">
                <FaCarSide className="text-blue-600 text-3xl mb-3 mx-auto md:mx-0" />
                <h3 className="font-semibold text-lg">Premium Vehicles</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Our fleet is maintained with engineering-level precision — clean, spacious, and inspected regularly for safety and comfort.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white text-center md:text-left">
                <FaUserShield className="text-blue-600 text-3xl mb-3 mx-auto md:mx-0" />
                <h3 className="font-semibold text-lg">Verified Drivers</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Trusted, polite, and well-trained drivers who know the routes, respect your time, and prioritize your safety.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white text-center md:text-left">
                <FaClock className="text-blue-600 text-3xl mb-3 mx-auto md:mx-0" />
                <h3 className="font-semibold text-lg">On-Time Guarantee</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Your schedule matters. We arrive on time — every time — to ensure your plans stay uninterrupted.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white text-center md:text-left">
                <FaCheckCircle className="text-blue-600 text-3xl mb-3 mx-auto md:mx-0" />
                <h3 className="font-semibold text-lg">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Zero hidden costs. Zero confusion. Just honest and clear pricing you can trust.
                </p>
              </div>
            </div>
          </div>

          {/* Travel Services */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center md:text-left">
              Where We Take You
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed mx-auto md:mx-0">
              From hill stations to coastlines, temples to cityscapes — we cover some of the most popular destinations across Maharashtra. Our services include travel to:
            </p>
            <p className="text-gray-600 max-w-4xl leading-relaxed font-medium text-gray-900 mx-auto md:mx-0">
              Pune • Mumbai • Lonavala • Khandala • Mahabaleshwar • Panchgani • Shirdi • Lavasa • Alibaug • Nashik • And many more…
            </p>
            <p className="text-gray-600 max-w-4xl leading-relaxed mx-auto md:mx-0">
              Whether you're planning a peaceful retreat, a family holiday, or a spiritual trip, we ensure your travel feels comfortable, safe, and memorable.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-3 px-10 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition font-medium text-lg"
            >
              Book Your Journey on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
