'use client';

import TechnologyItem from "./TechnologyItem";

export default function AboutSection() {

  const technologies = ["Node.JS", "React", "Angular", "TypeScript", "MongoDB"]

  return (
    <div className="flex justify-center items-center gap-4 w-[75%] leading-relaxed">
        <div className="w-1/2 self-start">
            <h1 className="text-3xl font-bold">Desenvolvedor Full Stack</h1>
            <p className="text-lg text-paragrahpColor">Experiência no desenvolvimento web de aplicações, utilizando principalmente JavaScript e TypeScript. Utilizando Node.js no backend e Angular/React no frontend.</p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-center">Tecnologias</h2>
            <div className="flex flex-col gap-2 ml-16">
              {technologies.map((tech, index) => (
                <TechnologyItem key={index} name={tech} />
              ))}
            </div>
        </div>
    </div>
  )
}