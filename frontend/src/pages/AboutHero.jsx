// src/pages/AboutHero.jsx

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          About Shravni Tourist & Travels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          Trusted tourist & travel service in Pune, delivering safe, comfortable, 
          and reliable rides for families, tourists, and corporate travellers.
        </motion.p>
      </div>
    </section>
  );
}
