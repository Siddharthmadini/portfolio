import { motion } from "framer-motion";
export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 bg-[var(--bg-secondary)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="border border-[var(--border-subtle)] rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Frontend Development</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS,
              HTML5, CSS3
            </p>
          </motion.div>

          {/* Backend */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="border border-[var(--border-subtle)] rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Backend Development</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Node.js, Express.js, RESTful APIs, JWT Authentication
            </p>
          </motion.div>

          {/* Databases */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="border border-[var(--border-subtle)] rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Databases</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              MongoDB, Mongoose ODM, SQLite
            </p>
          </motion.div>

          {/* Tools */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="border border-[var(--border-subtle)] rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Tools & Platforms</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Git, GitHub, Postman, VS Code, Vite, Vercel, Netlify, Render
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
