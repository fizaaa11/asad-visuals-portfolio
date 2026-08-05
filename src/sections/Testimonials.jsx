import { useState } from "react";

const testimonials = [
  {
    
    id: 1,
    quote:
      "Asad gets my vision and adds his own creative touch. The final result always exceeds expectations.",
    name: "Emily Watson",
    role: "Engineering Lead, Startup Labs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote:
      "Working with Asad was smooth. He understood my brand and made my videos look premium.",
    name: "Sarah Khan",
    role: "Product Manager, Nova Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      "Asad turned my raw footage into a masterpiece. His creativity is next level.",
    name: "Eric Sbac",
    role: "trader",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
   {
    id: 4,
    quote:
      "Asad turned my raw footage into a masterpiece. His creativity is next level.",
    name: "Fiza Aslam",
    role: "Software Engineer",
    avatar: "https://i.pinimg.com/736x/8b/32/d1/8b32d1bcd9ddab2a5844a79f74c71ab1.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
    id="testimonials"
     className="relative overflow-hidden bg-[#0b0f10] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.14),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_25%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-teal-400/80">
          What people say
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          <span className="text-teal-400">Kind words from</span>{" "}
          <span className="italic text-white/90">amazing people.</span>
        </h2>

        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(20,184,166,0.10)] backdrop-blur-md sm:p-10">
            <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-teal-300 text-3xl text-[#081012] shadow-[0_0_30px_rgba(32,178,166,0.45)]">
  ❝
</div>

            <blockquote className="font-poppins text-left text-lg leading-9 text-white/80 sm:text-[22px]">
              {activeTestimonial.quote}
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-teal-400/60"
              />

              <div className="text-left">
                <h4 className="text-sm font-semibold text-white">
                  {activeTestimonial.name}
                </h4>
                <p className="text-sm text-white/55">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-teal-400"
                    : "w-2 bg-white/25 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;