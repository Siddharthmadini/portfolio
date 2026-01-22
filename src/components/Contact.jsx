import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
  id="about"
  className="py-24 px-6 bg-[var(--bg-secondary)]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Contact</h2>

        <p className="text-[var(--text-muted)] mb-10 max-w-2xl">
          I’m open to internships, full-time opportunities, and collaboration.
          Feel free to reach out if you’d like to connect or discuss a project.
        </p>

        <div className="space-y-4 text-sm">
          <p>
            <span className="text-[var(--text-muted)]">Email:</span>{" "}
            <a
              href="mailto:siddharthmadini2811@gmail.com"
              className="underline hover:text-gray-300"
            >
              siddharthmadini2811@gmail.com
            </a>
          </p>

          <p>
            <span className="text-[var(--text-muted)]">GitHub:</span>{" "}
            <a
              href="https://github.com/Siddharthmadini"
              target="_blank"
              className="underline hover:text-gray-300"
            >
              github.com/Siddharthmadini
            </a>
          </p>

          <p>
            <span className="text-[var(--text-muted)]">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/siddharth-madini"
              target="_blank"
              className="underline hover:text-gray-300"
            >
              linkedin.com/in/siddharth-madini
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
