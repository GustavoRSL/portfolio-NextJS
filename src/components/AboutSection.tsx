"use client";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

import TechnologyItem from "./TechnologyItem";

export default function AboutSection() {
  const technologies = [
    { name: "React", icon: FaReact, description: "Building interactive UIs" },
    {
      name: "Angular",
      icon: FaAngular,
      description: "Powerful web applications",
    },
    { name: "Node.js", icon: FaNodeJs, description: "Server-side JavaScript" },
    { name: "MongoDB", icon: SiMongodb, description: "NoSQL database" },
    { name: "TypeScript", icon: SiTypescript, description: "Typed JavaScript" },
  ];

  return (
    <section
      id="sobre"
      className="flex flex-col justify-center items-center bg-muted"
    >
      <div className="container w-4/5 px-7 py-28 flex flex-col gap-4">
        <div className="flex-1 bg-card/50 rounded-lg shadow-md self-center w-full max-w-[45rem] min-w-[21rem]">
          <h2 className="text-3xl font-bold text-center text-primary mx-8 py-2">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-foreground text-lg mx-8 pb-4">
            Experiência no desenvolvimento web de aplicações, utilizando
            principalmente JavaScript e TypeScript. Utilizando Node.js no
            backend e Angular/React no frontend.
          </p>
        </div>
        <div className="flex-1 bg-card/50 rounded-lg shadow-md self-center w-full max-w-[45rem] min-w-[21rem]">
          <h2 className="text-3xl font-bold text-center text-primary py-2">
            Tecnologias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 py-4">
            {technologies.map((tech, index) => (
              <TechnologyItem
                key={index}
                name={tech.name}
                icon={tech.icon}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
