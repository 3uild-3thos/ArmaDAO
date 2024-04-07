import Bokeh from "@/components/ui/bokeh";
import { PuzzleIcon, SpeechIcon, Wand2Icon } from "lucide-react";
import { ReactNode } from "react";

interface IFeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: IFeatureCard) => {
  return (
    <div className="flex flex-col gap-4 p-10 shadow-xl rounded-2xl bg-zinc-900 backdrop-blur-lg w-full sm:w-[25rem]">
      <div className="flex gap-2">{icon}</div>
      <p className="text-2xl font-bold h-20">{title}</p>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
};

const features: Array<IFeatureCard> = [
  {
    title: "Create a DAO in minutes, zero coding needed",
    description:
      "Easily create a modular DAO, in different membership types, modules and configurations, without the need to code.",
    icon: (
      <Wand2Icon size={72} className="bg-gradient-magenta p-4 rounded-2xl" />
    ),
  },
  {
    title: "Modularity and Customizability",
    description:
      "Fine-grain control of configurations, modules and innovations you need for your DAO and community.",
    icon: (
      <PuzzleIcon size={72} className="bg-gradient-magenta p-4 rounded-2xl" />
    ),
  },
  {
    title: "Fully decentralized, community-owned",
    description:
      "The community owns the platform through its DAO, and can vote on features, decisions and configurations.",
    icon: (
      <SpeechIcon size={72} className="bg-gradient-magenta p-4 rounded-2xl" />
    ),
  },
];

const Features = () => {
  return (
    <section
      id="home-features"
      className="relative flex flex-col items-center justify-center w-full h-full gap-8 px-8 sm:px-0 pt-24 pb-16 z-10"
    >
      <Bokeh className="m-auto top-0 left-[-70%] opacity-5 from-cyan z-[-1]" />
      <h3 className="text-4xl sm:text-5xl font-semibold">
        Real Governance, Real Easy.
      </h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
