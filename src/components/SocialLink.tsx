import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary inline-flex w-fit items-center gap-2 transition-all duration-300 hover:text-primary/90 hover:font-normal"
    >
      {icon}
      <p className="text-foreground hover:text-foreground/90 text-base sm:text-lg md:text-xl">
        {label}
      </p>
    </a>
  );
}
