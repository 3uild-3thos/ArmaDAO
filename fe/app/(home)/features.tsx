import { PuzzleIcon, SpeechIcon, UnplugIcon, Wand2Icon } from "lucide-react";
import { ReactNode } from "react";

interface IFeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: IFeatureCard) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-8 shadow-xl rounded-2xl bg-slate-800/50 backdrop-blur-lg w-[25rem] text-center">
      <div className="flex gap-2">{icon}</div>
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
};

const features: Array<IFeatureCard> = [
  {
    title: "No-code DAO Wizard",
    description:
      "Easily create a modular DAO, in different membership types, without the need to code.",
    icon: <Wand2Icon size={40} />,
  },
  {
    title: "Modularity and Customizability",
    description:
      "Fine-grain control of configurations and innovations you need for your DAO and community.",
    icon: <PuzzleIcon size={40} />,
  },
  {
    title: "Fully decentralized, community-owned",
    description:
      "The platform itself has a DAO called the Mothership which will be driven by the community in terms of roadmap, features, decisions and even configurations.",
    icon: <SpeechIcon size={40} />,
  },
  {
    title: "Plugins and APIs",
    description:
      "No need to stay in the Armada platform to enjoy the full modularity of your DAO. Utilize and maximize our plugins and APIs to integrate your DAO on your own platform.",
    icon: <UnplugIcon size={40} />,
  },
];

const Features = () => {
  return (
    <section
      id="home-features"
      className="relative flex flex-col items-center justify-center w-full h-full gap-8 py-16"
    >
      <h3 className="text-4xl font-semibold">Governance by Governance</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
