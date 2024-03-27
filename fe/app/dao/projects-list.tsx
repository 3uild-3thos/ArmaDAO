import React from "react";

// next
import Image from "next/image";

// components
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { projects } from "@/mock/projects";
import { Bell, MoveRight, ThumbsUp } from "lucide-react";

// lib
import { IProject } from "@/lib/schema/projects.schema";

// helpers
import getRemainingDateTime from "@/lib/helpers/getRemainingDateTime";
import getPercentage from "@/lib/helpers/getPercentage";

function ProjectsList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectsList;

interface IProjectCartProps {
  project: IProject;
}

function ProjectCard({ project }: IProjectCartProps) {
  return (
    <div className="flex flex-col p-4 gap-5 border border-gray-500 rounded-lg max-w-96">
      <div className="w-full flex justify-center items-center">
        <div className="h-fit w-fit">
          <Image
            src={project.image}
            alt={project.image}
            width={256}
            height={250}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-xl">{project.name}</p>
        <p className="font-medium text-xs">By {project.creator}</p>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Type</p>
          <p className="text-xs font-medium">{project.type}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Backers</p>
          <p className="text-xs font-medium"> {project.backers}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Ends in</p>
          <p className="text-xs font-medium">
            {getRemainingDateTime(project.expiry)}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Progress
          value={getPercentage(project.currentFunds, project.goal)}
          className="h-[2px]"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            {/* TODO: Add "," to numbers */}
            <p className="text-sm font-medium">$ {project.currentFunds}</p>
            <p className="text-[10px]">/ {project.goal} goal</p>
          </div>
          <p className="text-[10px]">
            {getPercentage(project.currentFunds, project.goal)}% Funded
          </p>
        </div>

        {/* TODO: Show this if user does not have the NFT */}
        {/* <Button variant={"outline"} className="w-full flex items-center gap-2">
          <p className="font-medium text-sm">View</p>
          <MoveRight size={16} />
        </Button> */}

        {/* TODO: Only show this if the user has the NFT */}
        <div className="grid grid-cols-5 w-full ">
          <div className="col-span-2 flex items-center gap-2">
            <div className="p-3">
              <ThumbsUp size={20} />
            </div>
            <div className="p-3">
              <Bell size={20} />
            </div>
          </div>
          <div className="col-span-3">
            <Button
              variant={"outline"}
              className="w-full flex items-center gap-2"
            >
              <p className="font-medium text-sm">View</p>
              <MoveRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
