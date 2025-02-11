import FormContact from "./FormContact";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SocialLink from "./SocialLink";



export default function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-evenly gap-2 mx-[15%] mt-[5%] w-[80%]">
      <div className="flex flex-col md:w-2/5 gap-2">
        <div>
          <h2 className="font-bold text-lg sm:text-lg lg:text-3xl">Contato</h2>
          <p className="font-regular text-base sm:text-lg md:text-xl text-paragrahpColor">Se você deseja entrar em contato comigo para oportunidades de trabalho, projetos ou dúvidas, sinta-se à vontade para me enviar uma mensagem.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg sm:text-lg lg:text-3xl">Redes Sociais</h2>
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
      <div className="md:flex-1">
        <FormContact></FormContact>
      </div>
    </div>
  )
}
