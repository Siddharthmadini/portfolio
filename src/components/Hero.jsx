import {motion} from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[var(--bg-main)] text-[var(--text-primary)]">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Tag line */}
        <p className="uppercase tracking-widest text-sm mb-4 text-[var(--text-muted)]">
          Frontend Developer • Full Stack Aspirant
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Building scalable, clean <br /> web applications
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10">
          Frontend-focused developer with hands-on experience in React and
          modern web technologies, passionate about solving real-world problems
          through technology.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 bg-white text-black font-semibold rounded-lg"
          >
            View Projects
          </motion.a>

          <a
            href="#contact"
            className="px-7 py-3 border border-[var(--border-subtle)] text-white rounded-lg hover:bg-[var(--bg-secondary)] transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
