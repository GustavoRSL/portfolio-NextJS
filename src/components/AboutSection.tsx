'use client';

import TechnologyItem from "./TechnologyItem";

export default function AboutSection() {

  const technologies = ["Node.JS", "React", "Angular", "TypeScript", "MongoDB"]

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-[75%] leading-relaxed">
        <div className="w-[100%] md:w-1/2 self-center md:self-start">
            <h1 className="font-bold text-lg sm:text-lg lg:text-3xl">Desenvolvedor Full Stack</h1>
            <p className="text-paragrahpColor text-base sm:text-base lg:text-2xl">Experiência no desenvolvimento web de aplicações, utilizando principalmente JavaScript e TypeScript. Utilizando Node.js no backend e Angular/React no frontend.</p>
        </div>
        <div className="w-[100%] md:w-1/2 flex flex-col gap-2">
            <h2 className="font-bold md:text-center text-lg sm:text-lg lg:text-3xl">Tecnologias</h2>
            <div className="flex flex-col gap-2 md:ml-16">
              {technologies.map((tech, index) => (
                <TechnologyItem key={index} name={tech} />
              ))}
            </div>
        </div>
    </div>
  )
}