export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8 px-6 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-[var(--text-muted)]">
          © {new Date().getFullYear()} Siddhartha. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Siddharthmadini"
            target="_blank"
            className="hover:text-gray-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/siddharth-madini-a46105240"
            target="_blank"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>

          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
