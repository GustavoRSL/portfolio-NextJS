interface TechnologyItemProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const TechnologyItem = (props: TechnologyItemProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md">
      <props.icon className="text-4xl text-primary" />
      <h3 className="text-xl font-semibold text-card-foreground">
        {props.name}
      </h3>
      <div>
        <p className="text-muted-foreground text-center">{props.description}</p>
      </div>
    </div>
  );
};

export default TechnologyItem;
