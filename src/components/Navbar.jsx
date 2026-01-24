import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 border-b border-[var(--border-subtle)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="font-bold text-lg">MADINI MNV SAI SIDDHARTHA</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-white transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
