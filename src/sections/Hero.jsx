import { motion }from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
//import { useMemo } from "react"

const SOFTWARES = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut",
  "Photoshop",
  "Lightroom",
];

function FloatingParticles() {
  const particles = [
  { top: "5%", left: "8%", size: 2, duration: 12 },
  { top: "10%", left: "22%", size: 4, duration: 16 },
  { top: "15%", left: "40%", size: 3, duration: 14 },
  { top: "18%", left: "68%", size: 2, duration: 17 },
  { top: "22%", left: "88%", size: 3, duration: 15 },

  { top: "30%", left: "12%", size: 4, duration: 18 },
  { top: "35%", left: "32%", size: 3, duration: 13 },
  { top: "40%", left: "55%", size: 3, duration: 19 },
  { top: "45%", left: "78%", size: 4, duration: 16 },
  { top: "48%", left: "92%", size: 3, duration: 20 },

  { top: "55%", left: "8%", size: 4, duration: 15 },
  { top: "58%", left: "25%", size: 3, duration: 18 },
  { top: "62%", left: "48%", size: 2, duration: 14 },
  { top: "65%", left: "70%", size: 4, duration: 17 },
  { top: "68%", left: "90%", size: 3, duration: 16 },

  { top: "55%", left: "8%", size: 2, duration: 15 },
  { top: "58%", left: "25%", size: 3, duration: 18 },
  { top: "62%", left: "48%", size: 2, duration: 14 },
  { top: "65%", left: "70%", size: 1, duration: 17 },
  { top: "68%", left: "90%", size: 3, duration: 16 },

  { top: "75%", left: "15%", size: 4, duration: 20 },
  { top: "80%", left: "35%", size: 3, duration: 13 },
  { top: "84%", left: "58%", size: 5, duration: 18 },
  { top: "88%", left: "78%", size: 4, duration: 15 },
  { top: "92%", left: "92%", size: 2, duration: 19 },

  { top: "25%", left: "50%", size: 4, duration: 14 },
  { top: "52%", left: "38%", size: 3, duration: 17 },
  { top: "70%", left: "52%", size: 5, duration: 16 },
  { top: "95%", left: "50%", size: 3, duration: 18 },
];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[var(--color-primary)]"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            boxShadow: "0 0 12px rgba(32,178,166,.8)",
          }}
          animate={{
  x: [0, 30, -25, 20, 0],
  y: [0, -25, 20, -15, 0],
  opacity: [0.6, 1, 0.8, 1, 0.6],
  scale: [1, 1.4, 1, 1.3, 1],
}}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--color-background)]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-20 blur-[130px]" />

        <div className="absolute -bottom-10 right-0 h-[260px] w-[260px] rounded-full bg-[var(--color-highlight)] opacity-10 blur-[120px]" />

      </div>
      
        <FloatingParticles />
      {/* Hero Container */}

     <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 sm:px-8 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:max-w-[1400px] 2xl:max-w-[1600px]">
      

    <div className="w-full max-w-3xl">

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
className="mt-20 inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mt-16 lg:mt-10 sm:px-4 sm:py-2"
>
 <span className="mr-2 h-2 w-2 rounded-full bg-[var(--color-primary)] lg:mt-1"></span>
 <p className="text-[15px] text-gray-300 sm:text-sm lg:mt-1">
  Professional Video Editor
</p>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
className="mt-8 text-[2.8rem] font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem] 2xl:text-[4.8rem]"
>
  Where Every Frame 
   Tells

  <span className="mt-2 block font-serif italic text-[var(--color-primary)]">
    A Story.
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
className="mt-7 max-w-xl font-poppins text-base leading-8 text-gray-400 sm:text-lg xl:max-w-2xl"
>
  Asad Visuals creates cinematic edits for YouTube, brands,
  commercials, reels and social media.
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mt-10 flex flex-wrap gap-4"
>
  <a
  href="#projects"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 font-poppins text-sm font-semibold text-black transition duration-300 hover:scale-105 sm:px-7 sm:py-4 sm:text-base"
>
    View Showreel
    <Play size={18} />
  </a>

  <a
  href="#contact"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 font-poppins text-sm font-semibold text-white transition duration-300 hover:border-[var(--color-primary)] sm:px-7 sm:py-4 sm:text-base"
>
    Let's Work Together
    <ArrowRight size={18} />
  </a>
</motion.div>

        </div>

        {/* RIGHT SIDE */}

       <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
className="relative mx-auto mt-8 flex w-full justify-center md:mt-10 lg:mt-0 lg:justify-end xl:pr-4 2xl:pr-8"
>
  {/* Glow */}
  <div className="absolute h-[380px] w-[320px] rounded-[32px] bg-[var(--color-primary)] opacity-20 blur-[90px]" />

  {/* Image Card */}
 <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="relative flex justify-center"
>
  {/* Glow */}
 <div className="absolute h-56 w-56 rounded-full bg-[var(--color-primary)]/20 blur-[70px] sm:h-72 sm:w-72 lg:h-80 lg:w-80 lg:blur-[90px]" />

  {/* Image Circle */}
  <div className="relative rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-card)] p-2 shadow-2xl sm:p-3">

   <img
  src="/asad.png"
  alt="Asad Visuals"
  className="h-60 w-60 rounded-full object-cover shadow-[0_0_40px_rgba(32,178,166,.18)] transition-all duration-500 hover:scale-105 sm:h-72 sm:w-72 lg:h-[320px] lg:w-[320px]"
/>
    {/* Experience Badge */}
<div className="absolute left-2 top-6 rounded-xl border border-[var(--color-border)] bg-black/40 px-2 py-1.5 backdrop-blur-md sm:left-3 sm:top-12 sm:px-3 sm:py-2">
 <h3 className="text-lg font-bold text-[var(--color-primary)] sm:text-xl">
    3+
  </h3>

 <p className="text-[9px] text-gray-300 sm:text-[10px]">
    Years Experience
  </p>
</div>

    {/* Available Badge */}
   <div className="absolute bottom-4 right-2 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-black/40 px-3 py-1.5 backdrop-blur-md sm:bottom-8 sm:right-0 sm:px-4 sm:py-2">
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

      <span className="text-xs text-white sm:text-sm">
        Available
      </span>
    </div>

  </div>
</motion.div>
</motion.div>

      </div>

<div className="mt-8">

  {/* Small Heading */}
  <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
    Technologies I Work With
  </p>


  {/* Marquee */}
  <div
    className="overflow-hidden"
    style={{
      maskImage:
        "linear-gradient(to right, transparent 0%, black 70%, black 85%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 70%, black 85%, transparent 100%)",
    }}
  >

    <div className="flex w-max gap-12 animate-marquee">

      {[...SOFTWARES, ...SOFTWARES].map((item, index) => (
        <span
          key={index}
          className="whitespace-nowrap text-sm font-medium text-gray-500 transition hover:text-[var(--color-primary)] md:text-base"
        >
          {item}
        </span>
      ))}

    </div>

  </div>

</div>


    </section>
  );
}