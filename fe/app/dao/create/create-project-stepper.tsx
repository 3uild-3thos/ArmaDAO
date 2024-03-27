import { Star, ChevronRight } from "lucide-react";

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

export default CreateProjectStepper;
