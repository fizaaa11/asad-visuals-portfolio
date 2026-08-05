const ContactSection = () => {
  return (
    <section
    id="contact"
     className="relative overflow-hidden bg-[#0b0f10] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-teal-400/80">
            Contact us
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s build something{" "}
            <span className="text-teal-400">great together.</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
            Have a project in mind? Send a message and I’ll reply as soon as
            possible.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div>📧 editedbyasad@gmail.com</div>
            <div>📍 karachi, Pakistan</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-teal-400/15 blur-xl" />

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(20,184,166,0.08)] backdrop-blur-md sm:p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/50"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-[#081012] transition hover:bg-teal-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;