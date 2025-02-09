"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const sections: string[] = ["home", "sobre", "projetos", "contato"];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 60) {
            setActiveSection(id);
        }
      });
      setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-gray-900 text-white py-4 rounded-xl border border-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-lg z-10 mt-4">
      <ul className="flex justify-center space-x-6">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`${
                activeSection === section ? "text-yellow-400 font-bold" : ""
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
