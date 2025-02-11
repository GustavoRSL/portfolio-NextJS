import { DiAngularSimple, DiNodejsSmall, DiReact, DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

interface TechnologyItemProps {
  name: string;
}

const TechnologyItem = (props: TechnologyItemProps) => {
  const getIcon = (tech: string) => {
    switch (tech) {
      case "Angular":
        return <DiAngularSimple size={32} />;
      case "Node.JS":
        return <DiNodejsSmall  size={32} />;
      case "React":
        return <DiReact size={32} />;
      case "MongoDB":
        return <DiMongodb size={32} />;
      case "TypeScript":
        return <SiTypescript className="m-0.5" size={26} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {getIcon(props.name)}
      <p className="text-paragrahpColor text-center text-base sm:text-base lg:text-2xl">{props.name}</p>
    </div>
  );
};

export default TechnologyItem;
