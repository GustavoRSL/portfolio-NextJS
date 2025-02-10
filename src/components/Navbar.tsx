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
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-gray-900 text-white py-4 rounded-xl border border-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-lg z-10 mt-4">
      <ul className="flex justify-center space-x-6">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`block py-2 ${
                activeSection === section ? "text-secondaryColor font-bold" : ""
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
