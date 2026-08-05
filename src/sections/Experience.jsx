import { motion } from "framer-motion";
import ShapeGrid from "../components/background/ShapeGrid";
import TimelineItem from "../components/TimelineItem";


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[var(--color-background)] py-9"
    >

      {/* ShapeGrid Background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#242b32"
          hoverFillColor="#20b2a6"
          shape="square"
          hoverTrailAmount={0}
          hoverColor="#222222"
        />
      </div>


      {/* Background Glow */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[var(--color-highlight)] opacity-5 blur-[130px]"
        />

      </div>


      {/* Experience Content */}
     <div className="relative z-20 mx-auto max-w-6xl px-6">

  <div className="mb-10 text-center">

    <span className="font-poppins text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
      Career Journey
    </span>

    <h2 className="mt-2 font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
  Experience
</h2>

    <p className="mx-auto mt-6 max-w-2xl font-poppins text-[15px] leading-8 text-[var(--color-muted-foreground)]">
      From mastering the craft through years of practice to collaborating
      with international clients, every project has shaped a stronger
      creative journey.
    </p>

  </div>
  <div className="relative mx-auto max-w-5xl">

  {/* Timeline Line */}
  <div className="relative mx-auto max-w-5xl">

  {/* Timeline Line */}
<div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2">

  {/* Main Line */}
  <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent opacity-70"></div>

</div>

<TimelineItem
  year="2023"
  title="First International Client"
  description="Joined an international creative team and started editing YouTube content."
  badge="🌍 International Collaboration"
  side="left"
/>
<TimelineItem
  year="2024"
  title="Long-Term Creative Collaboration"
  description="Collaborating with the same international team for nearly three years, delivering consistent edits, storytelling and high-quality content."
  badge="🤝 Trusted Team Member"
  side="right"
/>

<TimelineItem
  year="2024 – Present"
  title="Senior Video Editor"
  description="Creating cinematic edits, commercials and branded content for global creators."
  badge="🏆 Current Position"
  side="left"
/>
</div>

 
</div>
  

</div>

    </section>
  );
}