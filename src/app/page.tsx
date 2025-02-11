'use client';

import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {

  return (
    <div className="md:snap-y md:snap-mandatory overflow-y-auto h-screen relative text-white scroll-smooth">
      <div className="bg-animated blur-sm"></div>
      <Navbar/>

      <section id="home" className="h-svh md:h-screen flex justify-center items-center md:snap-end">
        <HomeSection />
      </section>

      <section id="sobre" className="h-[calc(100svh+15svh)] md:h-screen flex justify-center items-center md:snap-end" >
        <AboutSection/>
      </section>

      <section id="projetos" className="h-[calc(100svh+15svh)] md:h-screen flex justify-center items-center md:snap-end">
        <h2 className="text-4xl">Meus Projetos</h2>
      </section>

      <section id="contato" className="h-[calc(100svh+60svh)] md:h-screen flex items-center md:snap-end">
        <ContactSection/>
      </section>
    </div>
  );
}
