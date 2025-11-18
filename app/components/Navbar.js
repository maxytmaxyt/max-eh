"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="neon-title" style={{ fontSize: "22px" }}>
        Emergency Germany
      </div>

      <div>
        <a href="/">Home</a>
        <a href="/info">Infos</a>
        <a href="/team">Team</a>
        <a href="/sneak-peeks">Sneak Peeks</a>
        <a href="/progress">Fortschritt</a>
        <a href="/events">Events</a>
        <a href="/partners">Partners</a>
        <a href="https://discord.gg/KDrnNTdzvc" target="_blank">Discord</a>
        <a href="https://www.roblox.com/share/g/444416456" target="_blank">Roblox Gruppe</a>
         </div>
    </motion.nav>
  );
}
