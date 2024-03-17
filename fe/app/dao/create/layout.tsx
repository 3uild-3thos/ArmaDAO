"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { createContext, useState } from "react";

export const CreateDaoContext = createContext<number>(0);

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < 3) setPage((state) => state + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage((state) => state - 1);
  };

  return (
    <CreateDaoContext.Provider value={page}>
      <div className="flex flex-col gap-5">
        <p className="font-medium text-xl">Create a Project</p>

        <div className="grid grid-cols-3 p-5 gap-10">
          <CreateProjectStepper page={page} />
          <div className="col-span-2 flex flex-col gap-10">
            {children}
            <div className="flex justify-between">
              {page > 0 ? (
                <Button variant={"ghost"} onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div className=""></div>
              )}

              {page < 3 ? (
                <Button variant={"ghost"} onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleNext}>Create</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </CreateDaoContext.Provider>
  );
};

export default RootLayout;

interface ICreateProjectStepperProps {
  page: number;
}

function CreateProjectStepper({ page }: ICreateProjectStepperProps) {
  const STEPS = [
    {
      title: "SubDao Info",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "Team Details",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "SubDao Config",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "Review / Confirmation",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      {STEPS.map((e: any, index: number) => (
        <div className="grid grid-cols-10 gap-3" key={e.title}>
          <div
            className={`${
              index == page && "rounded-full bg-gray-500"
            } h-6 w-6 p-2 flex justify-center items-center`}
          >
            <p>{index + 1}</p>
          </div>
          <div className="flex justify-center">
            <Star size={20} />
          </div>
          <div className="flex flex-col gap-2 col-span-7">
            <p className="font-medium">{e.title}</p>
            {/* TODO: Add proper text color */}
            <p className="font-normal text-gray-500">{e.description}</p>
          </div>
          <div>
            <ChevronRight size={30} />
          </div>
        </div>
      ))}
    </div>
  );
}
