"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function FeaturesPage() {
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
          <h1 className="text-3xl font-bold mb-4">Cityblitz – Features</h1>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Custom Citybuild System</li>
            <li>Komplett eigene OP-Tools</li>
            <li>Upgrade-System für Spieler</li>
            <li>Chunk Claim System</li>
            <li>Alles in einem einzigen Plugin – kein PlotSquared, kein Towny</li>
          </ul>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
