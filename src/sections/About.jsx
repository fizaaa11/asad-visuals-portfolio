import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-4 mt-25"
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-14 xl:px-16 2xl:px-20">

        

        {/* Content */}

        <div className="mx-auto grid w-full max-w-[1350px] items-center gap-12 md:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">

        {/* LEFT */}

        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
>
{/* Section Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]"
        >
          ABOUT ME
        </motion.p>



  <div className="mb-6 flex items-center gap-5 text-sm font-medium text-[var(--color-muted-foreground)]">
  <span>
    <span className="text-[var(--color-primary)] font-bold">50+</span> Projects
  </span>

  <div className="h-4 w-px bg-white/20"></div>

  <span>
    <span className="text-[var(--color-primary)] font-bold">200H+</span> Edited
  </span>
</div>

  <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
    Meet Asad,
    <br />

    <span className="font-serif italic text-[var(--color-primary)]">
      Founder Of Asad Visuals.
    </span>
  </h2>

  <p className="mt-6 max-w-xl text-[16px] leading-6 text-[var(--color-muted-foreground)]">
    I'm Asad, a passionate video editor specializing in cinematic storytelling,
    commercials, YouTube content, reels, and brand films. Every project is
    crafted to capture attention and leave a lasting impression.
  </p>


  {/* Quote */}

  <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
    <p className="font-serif text-xl italic text-white">
      "Every frame has a purpose.
      Every cut tells a story."
    </p>
  </div>

  

</motion.div>







{/* RIGHT PREMIUM ORBIT */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
 className="relative hidden h-[560px] w-full items-center justify-center lg:flex xl:h-[600px] 2xl:h-[640px]"
>
  {/* Background Glow */}
  <div className="absolute h-[470px] w-[470px] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />

  {/* OUTER ORBIT - CLOCKWISE */}
  <div className="absolute flex h-[390px] w-[390px] animate-[spin_35s_linear_infinite] items-center justify-center rounded-full border border-dashed border-[var(--color-primary)]/20">
    {/* Commercial Editing */}
    <div className="absolute -top-4 rounded-full border border-white/10 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl">
      <span className="font-poppins text-xs text-white/80">
        Commercial Editing
      </span>
    </div>

    {/* Motion Graphics */}
    <div className="absolute -bottom-4 rounded-full border border-white/10 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl">
      <span className="font-poppins text-xs text-white/80">
        Motion Graphics
      </span>
    </div>
  </div>

  {/* SECOND ORBIT - ANTICLOCKWISE */}
  <div
    className="absolute flex h-[290px] w-[290px] animate-[spinReverse_24s_linear_infinite] items-center justify-center rounded-full border border-dashed border-white/10"
  >
    {/* Color Grading */}
    <div className="absolute left-[-44px] top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl">
      <span className="font-poppins text-xs text-white/80">
        Color Grading
      </span>
    </div>

    {/* YouTube Content */}
    <div className="absolute right-[-44px] top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl">
      <span className="font-poppins text-xs text-white/80">
        YouTube Content
      </span>
    </div>
  </div>

  {/* INNER ORBIT (visual ring only) */}
  <div className="absolute h-[170px] w-[170px] animate-pulse rounded-full border border-[var(--color-primary)]/25" />

  {/* CENTER LOGO - perfectly centered */}
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: 6,
    }}
    transition={{ duration: 0.35 }}
    className="relative flex h-30 w-30 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-card)] shadow-[0_0_60px_rgba(32,178,166,.22)] backdrop-blur-xl"
  >
    <img
      src="/logo.png"
      alt="Asad Visuals"
      className="h-20 w-auto object-contain"
    />
  </motion.div>

  {/* FLOATING TAGS - still animated, but inside the orbit area */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="absolute top-16 right-16 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl"
  >
    <span className="font-poppins text-xs text-[var(--color-primary)]">
      Brand Campaigns
    </span>
  </motion.div>

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
    className="absolute bottom-16 left-16 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-card)]/90 px-5 py-2 backdrop-blur-xl"
  >
    <span className="font-poppins text-xs text-[var(--color-primary)]">
      Storytelling
    </span>
  </motion.div>
</motion.div>


         
        </div>

      </div>
    </section>
  );
}