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
      <section
        id="sobre"
        className="h-[calc(100svh+15svh)] md:h-screen flex justify-center items-center bg-muted"
      >
        <AboutSection />
      </section>

      <section
        id="projetos"
        className="h-[calc(100svh+15svh)] md:h-screen flex justify-center items-center"
      >
        <Projects />
      </section>

      <section
        id="contato"
        className="h-[calc(100svh+60svh)] md:h-screen flex items-center bg-muted"
      >
        <ContactSection />
      </section>
    </div>
  );
}
