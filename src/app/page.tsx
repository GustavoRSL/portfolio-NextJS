import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="snap-y overflow-y-scroll h-screen relative text-white">
      <div className="bg-animated blur-sm"></div>
      <Navbar />

      <section id="home" className="h-screen flex justify-center items-center snap-end">
        <h1 className="text-5xl font-bold">Bem-vindo ao meu portfólio</h1>
      </section>

      <section id="sobre" className="h-screen flex justify-center items-center snap-end">
        <h2 className="text-4xl">Sobre Mim</h2>
      </section>

      <section id="projetos" className="h-screen flex justify-center items-center snap-end">
        <h2 className="text-4xl">Meus Projetos</h2>
      </section>

      <section id="contato" className="h-screen flex justify-center items-center snap-end">
        <h2 className="text-4xl">Contato</h2>
      </section>
    </div>
  );
}