"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function AdminPage() {
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
          <h1 className="text-3xl font-bold mb-4">Cityblitz – Adminbereich</h1>

          <p className="text-gray-300">
            Hier können später News, Updates, interne Tools und Server-Verwaltung eingebaut werden.
          </p>

          <p className="text-gray-400 italic pt-2">
            (Später mit Login-System, Dashboard und Management)
          </p>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
