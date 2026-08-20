import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import VideoModal from "../components/VideoModal";

import reel1 from "../assets/videos/reel1.mp4";
import reel2 from "../assets/videos/reel2.mp4";
import reel3 from "../assets/videos/reel3.mp4";
import reel4 from "../assets/videos/reel4.mp4";
export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
  if (!selectedVideo) return;

  window.history.pushState({ videoModal: true }, "");

  const handleBack = () => {
    setSelectedVideo(null);
  };

  window.addEventListener("popstate", handleBack);

  return () => {
    window.removeEventListener("popstate", handleBack);
  };
}, [selectedVideo]);
  
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top Row */}

        <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr]">

          {/* Left */}

         <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="max-w-lg"
>
  <div className="inline-flex items-center gap-3">
    <span className="h-px w-10 bg-[var(--color-primary)]" />
    <span className="font-poppins text-[11px] font-semibold uppercase tracking-[0.5em] text-[var(--color-primary)]">
      Selected Projects
    </span>
  </div>

  <h2 className="mt-6 font-playfair text-5xl font-bold leading-[0.95] text-white md:text-7xl">
    Stories Worth
    <span className="block italic font-normal text-[var(--color-primary)]">
      Watching.
    </span>
  </h2>

  <p className="mt-7 max-w-md font-poppins text-[16px] leading-8 text-[var(--color-muted-foreground)]">
    Every project is carefully edited to blend cinematic visuals,
    seamless storytelling, and engaging pacing, creating videos that
    stay with the viewer long after the screen fades.
  </p>
</motion.div>

          {/* Featured */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="mb-5 font-poppins text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Featured Project
            </p>

          <ProjectCard
  featured
  title="YouTube Documentary"
  category="Long Form Editing"
  video={reel1}
  onClick={() =>
    setSelectedVideo({
      video: reel1,
      title: "YouTube Documentary",
      category: "Long Form Editing",
    })
  }
/>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-18 flex items-center gap-5">

          <div className="h-px flex-1 bg-white/10" />

          <span className="font-poppins text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Latest Reels
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        {/* Reels */}

        <div className="grid gap-8 md:grid-cols-2">

<ProjectCard
  title="Saas Animation"
  category="Instagram Reel"
  video={reel3}
  onClick={() =>
    setSelectedVideo({
      video: reel3,
      title: "Saas Animation",
      category: "Instagram Reel",
    })
  }
/>
        <ProjectCard
  title="filming reel"
  category="Instagram Reel"
  video={reel1}
  onClick={() =>
    setSelectedVideo({
      video: reel1,
      title: "filming reel",
      category: "Instagram Reel",
    })
  }
/>

         <ProjectCard
  title=" The Human Brain"
  category="Instagram Reel"
  video={reel2}
  onClick={() =>
    setSelectedVideo({
      video: reel2,
      title: "The Human Brain ",
      category: "Instagram Reel",
    })
  }
/>


    <ProjectCard
  title="Show Reel"
  category="Instagram Reel"
  video={reel4}
  onClick={() =>
    setSelectedVideo({
      video: reel4,
      title: "Show Reel",
      category: "Instagram Reel",
    })
  }
/>

        </div>

          </div>

      <VideoModal
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo?.video}
        title={selectedVideo?.title}
        category={selectedVideo?.category}
      />

    </section>
  );
}