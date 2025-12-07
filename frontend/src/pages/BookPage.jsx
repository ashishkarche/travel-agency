// src/pages/Book.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  MapPin,
  Navigation,
  Ticket,
  Calendar,
  Clock,
  Truck,
  Users,
  Check,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SeoHead from "../components/SeoHead";

const vehicleBase = {
  Hatchback: 1200,
  Sedan: 2000,
  "SUV / Innova": 2800,
  "Tempo Traveller": 5500,
};

export default function Book() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // simple validation
  const isValid =
    pickup.trim() && drop.trim() && vehicle && date && time && passengers >= 1;

  // price estimate computed from vehicle and an approximate distance factor
  const estimate = useMemo(() => {
    if (!vehicle) return null;
    const base = vehicleBase[vehicle] ?? 2000;
    // naive multiplier based on "distance" guess between city/vacation (demo only)
    const multiplier =
      pickup && drop && pickup.toLowerCase() !== drop.toLowerCase() ? 1 : 0.9;
    return Math.round(base * multiplier);
  }, [vehicle, pickup, drop]);

  useEffect(() => {
    // clear confirmation after a few seconds (keeps UI tidy)
    if (!confirmed) return;
    const t = setTimeout(() => setConfirmed(false), 5000);
    return () => clearTimeout(t);
  }, [confirmed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);

    // simulate API call
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setConfirmed(true);

    // Optionally clear form (comment out if you want to keep values)
    // setPickup(""); setDrop(""); setVehicle(""); setDate(""); setTime(""); setPassengers(1);
  };

  return (
    <>
      <SeoHead
        title="Book a Trip | Shravni Tourist & Travels – Book Cab Online"
        description="Book a comfortable and safe cab with Shravni Tourist & Travels — choose pickup, drop, vehicle, date & time. Instant quotes and 24/7 support."
        url="https://your-domain.com/book"
      />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* FORM CARD */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Book your journey
                </h1>
                <p className="mt-1 text-sm text-gray-600 max-w-lg">
                  Quick booking. Transparent pricing. Professional drivers.
                  Enter your details and get an instant estimate.
                </p>
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-3">
                <div className="text-xs text-gray-500">Need help?</div>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              {/* Pickup */}
              <label className="relative group">
                <span className="sr-only">Pickup Location</span>
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-200 group-focus-within:scale-110" />
                <input
                  className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Pickup Location (eg. Pune - Wakad)"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  aria-label="Pickup location"
                />
              </label>

              {/* Drop */}
              <label className="relative group">
                <span className="sr-only">Drop Location</span>
                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-200 group-focus-within:scale-110" />
                <input
                  className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Drop Location (eg. Mumbai Airport)"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  aria-label="Drop location"
                />
              </label>

              {/* Vehicle */}
              <label className="relative group">
                <span className="sr-only">Vehicle</span>
                <Truck className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-transform duration-200 group-focus-within:scale-110" />
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 pr-9 text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  aria-label="Choose vehicle"
                >
                  <option value="">Choose vehicle</option>
                  {Object.keys(vehicleBase).map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>

                {/* little chevron */}
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </label>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="relative group">
                  <span className="sr-only">Date</span>
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    aria-label="Choose date"
                  />
                </label>

                <label className="relative group">
                  <span className="sr-only">Time</span>
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    aria-label="Choose time"
                  />
                </label>
              </div>

              {/* Passengers */}
              <label className="relative group">
                <span className="sr-only">Passengers</span>
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                <input
                  type="number"
                  min={1}
                  value={passengers}
                  onChange={(e) =>
                    setPassengers(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full rounded-full border border-gray-200 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  aria-label="Number of passengers"
                />
              </label>

              {/* CTA */}
              <div className="mt-1">
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`w-full rounded-full py-3 px-6 text-white font-semibold shadow-lg transition-transform disabled:opacity-60 disabled:cursor-not-allowed
                    ${
                      isValid
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:scale-[1.02]"
                        : "bg-gray-400"
                    }`}
                >
                  <span className="flex items-center justify-center gap-3">
                    {loading ? (
                      <svg
                        className="w-5 h-5 animate-spin text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-20"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-90"
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    ) : (
                      <Ticket className="w-5 h-5" />
                    )}
                    <span>{loading ? "Confirming..." : "Confirm Booking"}</span>
                  </span>
                </button>
              </div>
            </form>
          </motion.section>

          {/* SUMMARY - Live preview */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="sticky top-6 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Booking Summary
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Instant estimate & details
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">Preview</div>
                </div>

                <motion.div
                  animate={{ scale: confirmed ? 0.98 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="mt-5 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <MapPin className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Pickup</div>
                      <div className="font-medium text-gray-900">
                        {pickup || (
                          <span className="text-gray-400">Enter pickup</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Navigation className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Drop</div>
                      <div className="font-medium text-gray-900">
                        {drop || (
                          <span className="text-gray-400">Enter drop</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Truck className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Vehicle</div>
                      <div className="font-medium text-gray-900">
                        {vehicle || (
                          <span className="text-gray-400">Choose vehicle</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Calendar className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Date & Time</div>
                      <div className="font-medium text-gray-900">
                        {date ? (
                          `${date} • ${time || "—"}`
                        ) : (
                          <span className="text-gray-400">Select date</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Users className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Passengers</div>
                      <div className="font-medium text-gray-900">
                        {passengers}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t mt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Estimated fare
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {estimate ? `₹ ${estimate}` : "—"}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Final fare may vary based on exact distance & tolls.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* quick benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Check className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Safe & Verified
                    </div>
                    <div className="text-xs text-gray-500">
                      Drivers verified • Cars sanitized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {confirmed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
            >
              <motion.div
                initial={{ y: 40, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <Check className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Booking Confirmed</h3>
                    <p className="text-sm text-gray-600">
                      We received your request. Our team will contact you
                      shortly to confirm details.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setConfirmed(false)}
                    className="px-4 py-2 rounded-full bg-blue-600 text-white"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
