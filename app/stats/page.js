"use client";

import Navbar from "../app/components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function StatsPage() {
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
          <h1 className="text-3xl font-bold mb-4">Cityblitz – Spielerstatistiken</h1>

          <p className="text-gray-300">
            Hier sollen später Leaderboards, Level, Spielzeit, Kills, Aktivitäten 
            und mehr automatisch angezeigt werden.
          </p>

          <p className="text-gray-400 italic pt-2">
            (Anbindung an Minecraft-Backend/API folgt später)
          </p>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
