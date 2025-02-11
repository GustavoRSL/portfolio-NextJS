import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen relative text-white scroll-smooth">
      <div className="bg-animated blur-sm"></div>
      <Navbar />

      <section id="home" className="h-screen flex justify-center items-center snap-start">
        <HomeSection />
      </section>

      <section id="sobre" className="h-screen flex justify-center items-center snap-start">
        <AboutSection/>
      </section>

      <section id="projetos" className="h-screen flex justify-center items-center snap-start">
        <h2 className="text-4xl">Meus Projetos</h2>
      </section>

      <section id="contato" className="h-screen flex items-center snap-start">
        <ContactSection/>
      </section>
    </div>
  );
}
