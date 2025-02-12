import FormContact from "./FormContact";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SocialLink from "./SocialLink";

export default function ContactSection() {
  return (
    <section id="contato" className="pb-40 pt-20 flex items-center bg-muted">
      <div className="container flex flex-col md:flex-row items-start mx-auto gap-4 w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="flex flex-col gap-4 md:max-w-[20rem] min-h-[23rem] md:justify-evenly lg:justify-between">
          <div className="w-full h-full bg-card/50 rounded-lg shadow-md self-center p-4">
            <h2 className="text-primary font-primary font-bold text-3xl">
              Contato
            </h2>
            <p className="text-foreground font-regular text-base">
              Se você deseja entrar em contato comigo para oportunidades de
              trabalho, projetos ou dúvidas, sinta-se à vontade para me enviar
              uma mensagem.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 bg-card/50 rounded-lg shadow-md self-center p-4">
            <h2 className="text-primary font-bold text-3xl">Redes Sociais</h2>
            <SocialLink
              href="https://www.linkedin.com/in/gustavo-reis-souza-lima/"
              icon={<FaLinkedin size={36} />}
              label="LinkedIn"
            />

            <SocialLink
              href="https://github.com/GustavoRSL"
              icon={<FaGithubSquare size={36} />}
              label="GitHub"
            />
          </div>
        </div>
        <FormContact></FormContact>
      </div>
    </section>
  );
}
