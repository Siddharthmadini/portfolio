import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 border-b border-[var(--border-subtle)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="font-bold text-lg">MADINI MNV SAI SIDDHARTHA</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
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
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <a onClick={() => setOpen(false)} href="#skills">
              Skills
            </a>
            <a onClick={() => setOpen(false)} href="#projects">
              Projects
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
