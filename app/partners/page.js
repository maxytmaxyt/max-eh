"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function Partners() {
  const partners = [
    {
      name: "German Roleplay Network",
      link: "https://discord.gg/DEIN_LINK",
      desc: "Großes deutsches Community-Netzwerk für Roblox RP.",
      color: "0,255,255"
    },
    {
      name: "BlueLight Community",
      link: "https://discord.gg/DEIN_LINK",
      desc: "Partner-Server für Notruf-, BOS- und Einsatzspieler.",
      color: "255,0,140"
    },
    {
      name: "Emergency Development Group",
      link: "https://discord.gg/DEIN_LINK",
      desc: "Entwicklerteam für deutsche Einsatzspiele.",
      color: "0,255,120"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 mt-16">
        <motion.h1
          className="neon-title text-4xl font-bold drop-shadow-[0_0_10px_#00ffe5]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🤝 Unsere Discord Partner
        </motion.h1>

        <p classname="text-white/70 mt-3">
          Hier findest du alle offiziellen Partner von Emergency Germany.
        </p>

        <div
          className="grid gap-6 mt-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              style={{
                padding: "22px",
                background: `rgba(${p.color},0.15)`,
                borderRadius: "14px",
                border: `1px solid rgba(${p.color},0.6)`,
                boxShadow: `0 0 15px rgba(${p.color},0.6)`
              }}
            >
              <h3 className="neon-title text-xl">{p.name}</h3>
              <p className="mt-2 text-white/80">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                className="button"
                style={{ marginTop: "15px", display: "inline-block" }}
              >
                Zum Discord
              </a>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <Analytics />
    </>
  );
}
