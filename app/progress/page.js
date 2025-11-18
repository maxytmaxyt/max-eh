"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function Progress() {
  const progress = 16; // Prozent Fortschritt
  const updates = [
    { version: "v0.4.2", date: "15.11.2025", text: "Neues Feuerwehr-Fahrzeug + UI Update" },
    { version: "v0.4.1", date: "10.11.2025", text: "Map-Erweiterung + Beleuchtung überarbeitet" },
    { version: "v0.3.9", date: "03.11.2025", text: "Discord-Integration & Rollen-System" },
    { version: "v0.3.0", date: "20.10.2025", text: "Erster spielbarer Build intern fertig" },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 mt-16">
        <motion.h1
          className="text-4xl neon-title font-bold drop-shadow-[0_0_10px_#00ffe5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Entwicklungsfortschritt
        </motion.h1>

        <h2 className="neon-sub text-2xl mt-6">📈 Fortschritt</h2>
        <div className="mt-4 bg-white/10 rounded-xl h-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2 }}
            className="h-full bg-cyan-500 shadow-[0_0_20px_#00eaff]"
          ></motion.div>
        </div>
        <p className="mt-2 text-white/80">{progress}% abgeschlossen</p>

        <h2 className="neon-sub text-2xl mt-10">📜 Update Verlauf</h2>
        <div className="mt-4 space-y-4">
          {updates.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-4 border-l-4 border-cyan-500 bg-white/5 rounded-xl shadow-[0_0_15px_#00eaff]"
            >
              <h3 className="neon-title">{u.version}</h3>
              <small className="text-white/70">{u.date}</small>
              <p>{u.text}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <Analytics />
    </>
  );
}
