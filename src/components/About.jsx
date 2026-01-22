import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-[var(--bg-secondary)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Summary */}
          <div>
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              I am a Frontend-focused developer aspiring to grow into a Full
              Stack Engineer. I am currently pursuing B.Tech in Computer Science
              Engineering (2023–2027) at Vignan Lara Institute of Technology and
              Science.
            </p>

            <p className="text-[var(--text-muted)] leading-relaxed">
              I enjoy building clean, scalable web applications using modern
              JavaScript frameworks and backend technologies, and I am
              passionate about solving real-world problems through technology.
            </p>
          </div>

          {/* Right: Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="border border-[var(--border-subtle)] rounded-xl p-6">
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-[var(--text-muted)]">
                B.Tech — Computer Science Engineering
                <br />
                Vignan Lara Institute of Technology and Science
                <br />
                2023 – 2027
              </p>
            </div>

            {/* Experience Card */}
            <div className="border border-[var(--border-subtle)] rounded-xl p-6">
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Virtual Intern — Infosys Springboard
                <br />
                AI & Machine Learning (Ongoing)
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
