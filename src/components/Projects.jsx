import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-[90px]">
      <motion.div
        className="py-24 px-6 bg-[var(--bg-secondary)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="space-y-10">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border border-[var(--border-subtle)] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">CampusToCareer</h3>

              <p className="text-sm text-[var(--text-muted)] mb-4">
                HTML, CSS, JavaScript, SQLite
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Built a full-stack educational platform supporting course
                delivery, user authentication, and role-based access for
                students and mentors. Implemented dashboards to visualize
                student progress and learning outcomes.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/Siddharthmadini/campus-to-career"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--text-muted)] hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://k5zvfz50-4000.inc1.devtunnels.ms/first_year.html"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--text-muted)] hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border border-[var(--border-subtle)] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Expense Tracker</h3>

              <p className="text-sm text-[var(--text-muted)] mb-4">
                React, Node.js, Express, MongoDB
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Developed a full-stack expense tracking application that allows
                users to record, categorize, and analyze expenses with real-time
                data persistence. Features include category-wise breakdown and
                monthly analytics.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/Siddharthmadini/ExpenseTracker"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--text-muted)] hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border border-[var(--border-subtle)] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                WeatherMan — Weather Assistant
              </h3>

              <p className="text-sm text-[var(--text-muted)] mb-4">
                HTML, CSS, JavaScript, OpenWeatherMap API
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Created a real-time weather assistant providing weather updates
                and air quality information (AQI). Added features such as
                weather-based music playlists, food recommendations, and driving
                condition insights.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/Siddharthmadini/WeatherMan"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--text-muted)] hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://weather-man-two.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--text-muted)] hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
