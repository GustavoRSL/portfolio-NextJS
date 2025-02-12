"use client";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center w-[50rem] mx-7">
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Transformando <span className="text-secondaryColor">ideias</span> em
          código, código em{" "}
          <span className="text-secondaryColor">soluções</span>.
        </h1>
        <p className="font-regular text-base sm:text-lg md:text-xl text-foreground">
          Sou Gustavo Lima, Desenvolvedor Full Stack, transformando desafios em
          oportunidades.
        </p>
      </div>
    </section>
  );
}
