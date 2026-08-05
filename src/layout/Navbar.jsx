import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const NAV_LINKS = ["About", "Projects", "Experience", "Testimonials"];

export default function Navbar() {
  return (
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
    className="inline-block h-1.5 w-1.5 translate-y-[-8px] rounded-full"
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
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Contact Button */}
      <a
        href="#contact"
        className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#0f1418] shadow-lg transition-transform duration-200 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #2fd4c4, #1a8f85)",
          boxShadow: "0 0 20px rgba(32,178,166,0.45)",
        }}
      >
        Contact Me
      </a>
    </motion.header>
  );
}

