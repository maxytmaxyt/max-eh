"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Stats", href: "/stats" },
    { name: "Admin", href: "/admin" },
    { name: "Shop", href: "/shop" },
    { name: "Discord", href: "https://discord.gg/DEIN_LINK", external: true },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="w-full bg-black/30 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_#00fff2]">
          Emergency German
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {links.map((link, i) =>
            link.external ? (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={i}>
                <Link href={link.href} className="hover:text-cyan-400 transition">
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} color="#00fff2" /> : <Menu size={28} color="#00fff2" />}
        </div>
      </div>

      {/* Mobile Menu mit Slide Animation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/80 border-t border-white/10 flex flex-col gap-4 p-4 md:hidden"
          >
            {links.map((link, i) =>
              link.external ? (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="hover:text-cyan-400 transition block"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition block"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
