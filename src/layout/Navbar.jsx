import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = ["About", "Projects", "Experience", "Testimonials"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1 text-lg font-bold tracking-tight text-white"
        >
          <img
            src={logo}
            alt="Asad Visuals"
            className="h-5 w-auto object-contain"
          />

          <span
            className="inline-block h-1.5 w-1.5 -translate-y-2 rounded-full"
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 0 6px 2px rgba(32,178,166,0.8)",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-md md:flex"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-[#0f1418] shadow-lg transition hover:scale-105 md:block"
          style={{
            background: "linear-gradient(135deg,#2fd4c4,#1a8f85)",
            boxShadow: "0 0 20px rgba(32,178,166,.45)",
          }}
        >
          Contact Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 rounded bg-white"></span>
          <span className="h-[2px] w-6 rounded bg-white"></span>
          <span className="h-[2px] w-6 rounded bg-white"></span>
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div


    
      initial={{ opacity: 0, y: -15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="fixed right-2 top-20 z-[999] w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#141a1f]/95 backdrop-blur-xl shadow-2xl md:hidden"
    >


      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
  <p className="text-sm font-semibold text-white">
    Menu
  </p>

  <button
    onClick={() => setMenuOpen(false)}
    className="text-2xl text-white transition hover:text-[var(--color-primary)]"
  >
    ✕
  </button>
</div>
      {NAV_LINKS.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-[var(--color-primary)]"
        >
          {link}
        </a>
      ))}

      <div className="border-t border-white/10" />

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="block px-6 py-4 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-white/5"
      >
        Contact
      </a>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}