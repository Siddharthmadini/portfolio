import { motion } from "framer-motion";

const experiences = [
  {
    role: "Virtual Intern — AI & Machine Learning",
    company: "Infosys Springboard",
    duration: "Jan 2025 – Present",
    type: "Internship",
    description:
      "Working on AI/ML modules covering supervised and unsupervised learning, neural networks, and model evaluation. Completing hands-on projects involving data preprocessing, feature engineering, and building predictive models using Python and scikit-learn.",
    tags: ["Python", "Machine Learning", "scikit-learn", "Data Analysis"],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "Aug 2024 – Present",
    type: "Volunteer",
    description:
      "Actively contributing to open source projects by fixing bugs, improving documentation, and adding small features. Collaborating with maintainers through pull requests and code reviews to improve code quality.",
    tags: ["Git", "GitHub", "JavaScript", "React"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jun 2024 – Present",
    type: "Freelance",
    description:
      "Building responsive websites and web applications for small clients. Handling end-to-end development from requirement gathering to deployment on platforms like Vercel and Netlify.",
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-[90px]">
      <motion.div
        className="py-24 px-6 bg-[var(--bg-secondary)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>

          <div className="relative border-l border-[var(--border-subtle)] ml-3 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[var(--bg-secondary)]" />

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="border border-[var(--border-subtle)] rounded-xl p-6"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs px-2 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)]">
                        {exp.type}
                      </span>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-[var(--border-subtle)] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
