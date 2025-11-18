"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Events() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-11-25T18:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft("Event läuft jetzt!");
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 mt-16 text-center">
        <h1 className="text-4xl neon-title font-bold drop-shadow-[0_0_10px_#00ffe5]">
          Kommende Events
        </h1>

        <p className="mt-4 text-white/80">Nächstes Event startet in:</p>
        <div className="text-5xl text-cyan-400 font-bold mt-6 animate-pulse">
          {timeLeft}
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
