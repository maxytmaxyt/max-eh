"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function SneakyPeaks() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 mt-16">
        <motion.h1
          className="text-4xl neon-title font-bold drop-shadow-[0_0_10px_#00ffe5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sneaky Peaks
        </motion.h1>

        <p className="mt-4 text-white/70">
          Erste Einblicke und Bilder vom Spiel!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-[0_0_20px_#00eaff]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.img
                src={`/sneak${i}.png`}
                alt={`Sneak Peek ${i}`}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <Analytics />
    </>
  );
}
