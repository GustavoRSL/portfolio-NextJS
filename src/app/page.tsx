"use client";

import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="overflow-y-auto h-svh relative text-white scroll-smooth">
      <Navbar />
      <HomeSection />
      <AboutSection />

      <section
        id="projetos"
        className="h-svh md:h-screen flex justify-center items-center"
      >
        <Projects />
      </section>
      <ContactSection />
    </div>
  );
}
