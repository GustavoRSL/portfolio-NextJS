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
      className="text-paragrahpColor inline-flex w-fit items-center gap-2 transition-all duration-300 hover:text-white hover:font-medium"
    >
      {icon}
      <p>{label}</p>
    </a>
  );
}
