import React from "react";

// next
import Image from "next/image";

// components
import FundedProjects from "@/dao/funded-projects";
import ProjectsList from "@/dao/projects-list";
import { Button } from "@/components/ui/button";

const DAOPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="font-medium text-3xl">Explore projects</p>
      <div className="w-full flex justify-center">
        <div className="h-fit w-fit">
          <Image
            src={"https://placehold.co/1200x360"}
            alt={"DAO Banner"}
            width={1200}
            height={360}
            className="rounded-[2rem] object-cover shadow-2xl"
          />
        </div>
      </div>

      <FundedProjects />

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">All</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">Trending</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">Upcoming</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">Finished</p>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Oldest</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Most Funded</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Most Backers</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">All Categories</p>
          </Button>
        </div>
      </div>
      <ProjectsList />
    </div>
  );
};

export default DAOPage;
