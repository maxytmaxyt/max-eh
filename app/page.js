"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Particles from "./components/Particles"; // <-- Animierter Hintergrund

export default function CityblitzPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">

      {/* Animated Background Particles */}
      <Particles quantity={60} color="#00eaff" />

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-28 px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_25px_#00eaff]"
          >
            Cityblitz Network 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Der modernste Citybuild Minecraft Server – komplett selbst entwickelt,
            neon-glowing UI, OP-Tools, Upgrades und ein Full-Custom Plugin.
          </motion.p>

          {/* Floating Buttons */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mt-8 flex justify-center gap-6"
          >
            <Link href="/info">
              <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_#00eaff] hover:scale-105 transition">
                Mehr Infos
              </button>
            </Link>

            <a href="https://discord.gg/DEIN_LINK" target="_blank">
              <button className="px-8 py-3 rounded-xl border border-cyan-400/30 bg-white/5 hover:bg-white/10 hover:scale-105 transition">
                Discord Joinen
              </button>
            </a>
          </motion.div>
        </motion.div>


        {/* GLOW DIVIDER */}
        <div className="mt-20 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>


        {/* 3D FEATURE CARDS */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-cyan-300 drop-shadow-[0_0_10px_#00eaff]">
            Die Cityblitz Experience ⚡
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Custom Plugin",
                desc: "Alles aus einem einzigen, selbst entwickelten System."
              },
              {
                title: "OP Tools + Upgrades",
                desc: "Progressions-System mit Leveln, Upgrades & Skills."
              },
              {
                title: "Chunk Claiming",
                desc: "Claim dein Gebiet – baue deine eigene Stadt."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl shadow-lg 
                  backdrop-blur-md transition transform"
              >
                <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* SNEAK PEEKS SECTION */}
        <section className="max-w-6xl mx-auto mt-24">
          <h2 className="text-4xl font-bold mb-6 text-cyan-300">Sneak Peeks 👀</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative p-6 bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent blur-3xl"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">Neues Citybuild UI</h3>
                <p className="text-gray-300 mt-2">
                  Komplett neue Interfaces, modern und übersichtlich.
                </p>
                <Link href="/sneak-peeks">
                  <button className="mt-4 px-5 py-2 bg-cyan-600/80 hover:bg-cyan-500 rounded-lg transition shadow-[0_0_15px_#00eaff]">
                    Mehr ansehen
                  </button>
                </Link>
              </div>

              <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="w-full md:w-72 h-40 bg-black/40 border border-white/10 rounded-lg flex items-center justify-center text-gray-500"
              >
                <span>Bild Vorschau</span>
              </motion.div>
            </div>
          </motion.div>
        </section>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center mt-28 mb-20"
        >
          <h2 className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_10px_#00eaff]">
            Bist du bereit für Cityblitz?
          </h2>

          <p className="text-gray-300 mt-2">Join jetzt – noch vor Release!</p>

          <a href="https://discord.gg/DEIN_LINK" target="_blank">
            <button className="mt-5 px-10 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-[0_0_20px_#00eaff] hover:scale-105 transition">
              Discord Beitreten
            </button>
          </a>
        </motion.div>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
