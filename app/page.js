"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function CityblitzPage() {
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
          <h1 className="text-3xl font-bold mb-4">Cityblitz – Minecraft Netzwerk</h1>
          <p className="text-gray-300">
            Cityblitz ist ein moderner, komplett selbst entwickelter Citybuild-Server mit 
            einzigartigen Features, OP-Tools, Upgrades, Chunk-Claims und einem eigenen Full-Custom Plugin.
          </p>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
