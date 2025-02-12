"use client";

import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(() => ["home", "sobre", "projetos", "contato"], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="w-svw bg-background/80 backdrop-blur-sm border border-white/20 fixed top-0 py-4 rounded-lg z-10 transition-all duration-100">
      <ul className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`block py-2 ${
                activeSection === section
                  ? "text-primary font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                  : "text-primary text-sm sm:text-base md:text-lg lg:text-xl"
              } transition-all`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
