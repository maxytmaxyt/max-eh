"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"; // ✅ Vercel Analytics

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">

        {/* Titel */}
        <motion.h1
          className="neon-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          City
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: "18px" }}
        >
          Willkommen auf der offiziellen Webseite des deutschen Roblox-Einsatzspiels
          <strong> Emergency Germany</strong>.
        </motion.p>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: "40px" }}
        >
          <h2 className="neon-sub">🚔 Aktueller Status</h2>
          <p>
            Das Spiel befindet sich derzeit in der aktiven Entwicklung.  
            Tägliche Updates, Teaser und Entwickler-Infos gibt es auf unserem Discord.
          </p>

          <a
            href="https://discord.gg/DEIN_LINK"
            className="button"
            target="_blank"
          >
            Discord beitreten
          </a>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "60px" }}
        >
          <h2 className="neon-sub">✨ Was erwartet dich?</h2>

          <ul style={{ lineHeight: "1.8", fontSize: "17px" }}>
            <li>• Realistische deutsche Einsatzfahrzeuge (Polizei, Feuerwehr, Rettung)</li>
            <li>• Open-World Stadt basierend auf deutschen Städten</li>
            <li>• Umfangreiche Rollen & Jobs</li>
            <li>• High-End Beleuchtung + Wettersystem</li>
            <li>• Einsatzleitstelle & Funk-System</li>
            <li>• Multiplayer Missionen</li>
          </ul>
        </motion.div>

        {/* Drei Spalten Sektion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "60px",
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          <div style={{
            padding: "20px",
            background: "rgba(0,40,60,0.35)",
            borderRadius: "12px",
            boxShadow: "0 0 20px #00eaff"
          }}>
            <h3 className="neon-title">🚨 Realistische Einsätze</h3>
            <p>Von Verkehrsunfällen bis hin zu Großlagen – alles dynamisch & zufällig.</p>
          </div>

          <div style={{
            padding: "20px",
            background: "rgba(40,0,60,0.35)",
            borderRadius: "12px",
            boxShadow: "0 0 20px #ff00ff"
          }}>
            <h3 className="neon-title">🌆 Moderne Map</h3>
            <p>Detaillierte deutsche Stadt mit Beleuchtung, Verkehr & NPC-System.</p>
          </div>

          <div style={{
            padding: "20px",
            background: "rgba(0,60,20,0.35)",
            borderRadius: "12px",
            boxShadow: "0 0 20px #00ff95"
          }}>
            <h3 className="neon-title">🎮 Community-Based</h3>
            <p>Updates, Vorschläge und Feedback kommen direkt aus der Community.</p>
          </div>
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: "70px",
            padding: "25px",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "10px",
            boxShadow: "0 0 30px #00eaff",
            textAlign: "center"
          }}
        >
          <h2 className="neon-sub">🚧 Coming Soon</h2>
          <p>
            Emergency Germany befindet sich im Aufbau – bleib dran für neue Sneak Peeks und Fortschritte!
          </p>
        </motion.div>

      </div>

      <Footer />

      {/* ✅ Vercel Analytics */}
      <Analytics />
    </>
  );
}
