import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen relative text-white scroll-smooth">
      <div className="bg-animated blur-sm"></div>
      <Navbar />

      <section id="home" className="h-screen flex justify-center items-center snap-start">
        <HomeSection />
      </section>

      <section id="sobre" className="h-screen flex justify-center items-center snap-start">
        <h2 className="text-4xl">Sobre Mim</h2>
      </section>

      <section id="projetos" className="h-screen flex justify-center items-center snap-start">
        <h2 className="text-4xl">Meus Projetos</h2>
      </section>

      <section id="contato" className="h-screen flex justify-center items-center snap-start">
        <h2 className="text-4xl">Contato</h2>
      </section>
    </div>
  );
}
