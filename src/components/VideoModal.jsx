import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoModal({
  open,
  onClose,
  video,
  title,
  category,
}) {

  const videoRef = useRef(null);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/90 backdrop-blur-md p-4 md:p-8"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .9,
            }}
            transition={{
              duration: .35,
            }}
            onClick={(e) => e.stopPropagation()}
           className="relative mx-auto mt-10 mb-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-card)]"
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xl transition hover:bg-[var(--color-primary)]"
            >
              ✕
            </button>

            {/* Video */}

           <video
  ref={videoRef}
  src={video}
  controls
  autoPlay
  playsInline
  className="w-full max-h-[75vh] object-contain bg-black"
/>
            {/* Info */}

            <div className="p-7">

              <span className="rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">

                {category}

              </span>

              <h2 className="mt-5 font-playfair text-4xl text-white">

                {title}

              </h2>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}