// react
import { ReactNode } from "react";

// components
import CompletedNumber from "@/create/(stepper)/completed-number";
import CurrentNumber from "@/create/(stepper)/current-number";
import InactiveNumber from "@/create/(stepper)/inactive-number";
import {
  BadgeInfoIcon,
  ChevronRightIcon,
  FileCheck2Icon,
  HammerIcon,
  Settings2Icon,
} from "lucide-react";

interface ICreateFleetStepper {
  page: number;
}

interface IStep {
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: Array<IStep> = [
  {
    icon: <BadgeInfoIcon size={24} />,
    title: "Fleet DAO Info",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
  },
  {
    icon: <HammerIcon size={24} />,
    title: "Team Details",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
  },
  {
    icon: <Settings2Icon size={24} />,
    title: "Fleet DAO Config",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
  },
  {
    icon: <FileCheck2Icon size={24} />,
    title: "Review & Submit",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
  },
];

const CreateFleetStepper = ({ page }: ICreateFleetStepper) => {
  console.log("page", page);
  return (
    <div className="flex flex-col gap-12">
      {steps.map((step: IStep, index: number) => (
        <div className="grid grid-cols-12 gap-2" key={step.title}>
          {page === index ? (
            <CurrentNumber className="col-span-2" page={index + 1} />
          ) : index < page ? (
            <CompletedNumber className="col-span-2" />
          ) : (
            <InactiveNumber className="col-span-2" page={index + 1} />
          )}

          <div className="flex justify-center mt-[0.5px] col-span-1">
            {step.icon}
          </div>
          <div className="flex flex-col gap-2 col-span-8">
            <p className="font-medium text-xl">{step.title}</p>
            {/* TODO: Add proper text color */}
            <p className="font-normal text-gray-500">{step.description}</p>
          </div>
          {index == page && (
            <div className="col-span-1 flex items-center">
              <ChevronRightIcon size={40} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateFleetStepper;
