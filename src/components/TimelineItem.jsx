import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
  badge,
  side = "left",
}) {
  const left = side === "left";

  const Card = (
    <motion.div
   initial={{
  opacity: 0,
}}

whileInView={{
  opacity: 1,
}}
whileHover={{
    y: -6,
  }}
viewport={{
  once: false,
  amount: 0.35,
}}

transition={{
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1],
}}
      className="w-full max-w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/90 px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(32,178,166,0.18)] md:max-w-[540px]"
    >
      {/* Year */}
      <span className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-medium text-[var(--color-primary)]">
        {year}
      </span>

      {/* Title */}
      <h3 className="mt-3 font-playfair text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 font-poppins text-sm leading-6 text-[var(--color-muted-foreground)]">
        {description}
      </p>

      {/* Badge */}
      <div className="mt-5">
        <span className="inline-flex rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
          {badge}
        </span>
      </div>
    </motion.div>
  );

 return (
  <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2 md:items-center md:gap-8">

    {left ? (
      <>
        {/* Desktop Left | Mobile Full Width */}
        <div className="flex justify-center md:justify-end">
          {Card}
        </div>

        {/* Desktop Empty */}
        <div className="hidden md:block" />
      </>
    ) : (
      <>
        {/* Desktop Empty */}
        <div className="hidden md:block" />

        {/* Desktop Right | Mobile Full Width */}
        <div className="flex justify-center md:justify-start">
          {Card}
        </div>
      </>
    )}

  </div>
);
}