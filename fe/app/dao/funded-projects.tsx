// next
import Image from "next/image";

// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Bell, ThumbsUp } from "lucide-react";

// lib
import { IProject } from "@/lib/schema/projects.schema";
import getRemainingDateTime from "@/lib/helpers/getRemainingDateTime";
import getPercentage from "@/lib/helpers/getPercentage";

// mock
import { projects } from "@/mock/projects";

function FundedProjects() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium">Your funded projects</p>
      <Carousel>
        <CarouselContent className="ml-4">
          {projects.map((project) => {
            return (
              <CarouselItem key={project.id} className="basis-1/3">
                <FundedProjectCard project={project} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

interface IFundedProjectCardProps {
  project: IProject;
}

function FundedProjectCard({ project }: IFundedProjectCardProps) {
  return (
    <div className="grid grid-cols-3 p-4 gap-6">
      <div className="flex justify-center items-center">
        <div className="h-fit w-fit">
          <Image
            src={project.image}
            alt={project.image}
            width={145}
            height={145}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-xl">{project.name}</p>

            <div className="flex items-center gap-2">
              <ThumbsUp size={20} />
              <Bell size={20} />
            </div>
          </div>

          <p className="font-medium text-xs">By {project.creator}</p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Type</p>
              <p className="text-xs font-medium">{project.type}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Backers</p>
              {/* TODO: Add "," to numbers */}
              <p className="text-xs font-medium">{project.backers}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Ends in</p>
              <p className="text-xs font-medium">
                {getRemainingDateTime(project.expiry)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Progress
            value={getPercentage(project.currentFunds, project.goal)}
            className="h-[2px]"
          />
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              {/* TODO: Add "," to numbers */}
              <p className="text-sm font-medium">$ {project.currentFunds}</p>
              {/* TODO: Add "," to numbers */}
              <p className="text-[10px]">/ {project.goal} goal</p>
            </div>

            <p className="text-[10px]">
              {getPercentage(project.currentFunds, project.goal)}% Funded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundedProjects;
