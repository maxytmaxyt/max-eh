"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-4">Cityblitz – Shop</h1>

          <p className="text-gray-300">
            Hier sollen später Ränge, Items und Upgrades kaufbar sein.
          </p>

          <p className="text-gray-400 italic pt-2">
            (Integration mit Tebex oder eigenem Backend folgt später)
          </p>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
