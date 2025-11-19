"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Cityblitz", href: "/cityblitz" },
    { name: "Features", href: "/features" },
    { name: "Stats", href: "/stats" },
    { name: "Admin", href: "/admin" },
    { name: "Shop", href: "/shop" },
    { name: "Discord", href: "https://discord.gg/DEINLINK", external: true }
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_#00fff2]">
          Cityblitz
        </h1>

        {/* Desktop Navigation (nur ab md sichtbar) */}
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
                <Link
                  href={link.href}
                  className="hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Button (nur <md sichtbar) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} color="#00fff2" /> : <Menu size={28} color="#00fff2" />}
        </div>
      </div>

      {/* Mobile Menu: erscheint genau UNTER der Navbar */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/80 border-t border-white/10 overflow-hidden flex flex-col p-4 gap-3"
          >
            {links.map((link, i) =>
              link.external ? (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="block hover:text-cyan-400 transition"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="block hover:text-cyan-400 transition"
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
