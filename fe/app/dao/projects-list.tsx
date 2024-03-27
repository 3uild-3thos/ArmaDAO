import React from "react";

// next
import Image from "next/image";

// components
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function ProjectsList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectsList;
function ProjectCard() {
  return (
    <div className="flex flex-col p-4 gap-5 border border-gray-500 rounded-lg">
      <div className="w-full flex justify-center items-center">
        <div className="h-fit w-fit">
          <Image
            src={"https://placehold.co/256x250"}
            alt={"DAO Banner"}
            width={256}
            height={250}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-xl">DAOCre-8</p>
        <p className="font-medium text-xs">By DAOCre8 Inc.</p>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Type</p>
          <p className="text-xs font-medium">Software</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Backers</p>
          <p className="text-xs font-medium">1,784</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[10px]">Ends in</p>
          <p className="text-xs font-medium">26d 5h 34m 42s</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={32.41} className="h-[2px]" />
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <p className="text-sm font-medium">32,412</p>
            <p className="text-[10px]">/ 100,000 goal</p>
          </div>
          <p className="text-[10px]">32.41% Funded</p>
        </div>

        <Button variant={"outline"}>View</Button>
      </div>
    </div>
  );
}
