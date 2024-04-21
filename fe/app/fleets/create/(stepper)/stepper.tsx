"use client";

// react
import { ReactNode } from "react";

// components
import CompletedNumber from "@/app/fleets/create/(stepper)/completed-number";
import CurrentNumber from "@/app/fleets/create/(stepper)/current-number";
import InactiveNumber from "@/app/fleets/create/(stepper)/inactive-number";
import {
  BadgeInfoIcon,
  ChevronRightIcon,
  FileCheck2Icon,
  HammerIcon,
  Settings2Icon,
} from "lucide-react";

// lib
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/zustand/store";

interface IStep {
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: Array<IStep> = [
  {
    icon: <BadgeInfoIcon size={24} />,
    title: "Fleet DAO Info",
    description: `Outline your Fleet's brand and digital footprint to connect with the community.`,
  },
  {
    icon: <Settings2Icon size={24} />,
    title: "Fleet DAO Config",
    description: `Set up your governance structure, customizing how your Fleet operates and makes decisions.`,
  },
  {
    icon: <HammerIcon size={24} />,
    title: "Team Details",
    description: `Share your team's story and vision, or opt for privacy with anonymity.`,
  },
  {
    icon: <FileCheck2Icon size={24} />,
    title: "Review & Submit",
    description:
      "Review your details for accuracy, then launch your Fleet into action.",
  },
];

const CreateFleetStepper = () => {
  const { page } = useStore();

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

          <div
            className={cn(
              "flex justify-center mt-[0.5px] text-muted/30 col-span-1",
              index <= page && "text-muted"
            )}
          >
            {step.icon}
          </div>
          <div className="flex flex-col col-span-8 gap-2">
            <p
              className={cn(
                "font-medium text-xl text-muted/30",
                index <= page && "text-muted"
              )}
            >
              {step.title}
            </p>
            <p
              className={cn(
                "font-normal text-gray-500/40 mr-2",
                index <= page && "text-gray-500"
              )}
            >
              {step.description}
            </p>
          </div>
          {index == page && (
            <div className="flex items-center col-span-1">
              <ChevronRightIcon size={40} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateFleetStepper;
