import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({
  title,
  category,
  video,
  featured = false,
  onClick,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (!videoRef.current || !video) return;
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (!videoRef.current || !video) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-card)] cursor-pointer transition-all duration-500 hover:border-[var(--color-primary)]/40 hover:shadow-[0_20px_60px_rgba(32,178,166,.18)]
      ${featured ? "h-[330px]" : "h-[260px] md:h-[290px]"}`}
    >
      {/* Video */}

      {video ? (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--color-card)] to-black">
          <span className="font-poppins text-sm tracking-[0.25em] text-white/40 uppercase">
            Coming Soon
          </span>
        </div>
      )}

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute bottom-[-80px] left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--color-primary)]/20 blur-[80px]" />
      </div>

      {/* Play Button */}

      {video && (
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary)]">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

          </div>

        </div>
      )}

      {/* Bottom */}

      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">

       <span className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-poppins text-[9px] uppercase tracking-[0.12em] text-[var(--color-primary)] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[11px]">
          {category}
        </span>

        <h3 className="mt-3 font-playfair text-xl font-semibold leading-tight text-white sm:mt-4 sm:text-2xl">
          {title}
        </h3>

      </div>
    </motion.div>
  );
}