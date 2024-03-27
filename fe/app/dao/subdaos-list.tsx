"use client";
import React, { useState } from "react";

// next
import Image from "next/image";

// components
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { projects } from "@/mock/projects";
import {
  Bell,
  Coins,
  MoveRight,
  Newspaper,
  ThumbsUp,
  Users,
} from "lucide-react";

// lib
import { IProject } from "@/lib/schema/projects.schema";

// helpers
import getRemainingDateTime from "@/lib/helpers/getRemainingDateTime";
import getPercentage from "@/lib/helpers/getPercentage";
import { ISubDaoInfo } from "@/lib/schema/subdao-info.schema";
import { daos } from "@/mock/daos";
import shortenDescription from "@/lib/helpers/shortenDescription";

function SubDaosList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {daos.map((dao) => {
        return <ProjectCard key={dao.id} dao={dao} />;
      })}
    </div>
  );
}

export default SubDaosList;

interface IProjectCartProps {
  dao: ISubDaoInfo;
}

function ProjectCard({ dao }: IProjectCartProps) {
  const [seeMore, setseeMore] = useState(false);

  const onSeeMore = () => {
    setseeMore((state) => !state);
  };

  return (
    <div className="flex flex-col p-4 gap-5 border border-gray-500 rounded-lg max-w-96">
      <div className="w-full flex justify-center items-center">
        <div className="h-fit w-fit">
          <Image
            src={dao.image ?? ""}
            alt={dao.image ?? ""}
            width={256}
            height={250}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-xl">{dao.title}</p>
        <p className="font-medium text-xs">By {dao.creator}</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <p className=" text-xs">
          {seeMore
            ? shortenDescription(dao.description, 170)
            : shortenDescription(dao.description, 40)}
        </p>

        {dao.description.length >= 50 && (
          <Button variant={"ghost"} className="p-0 m-0 h-0" onClick={onSeeMore}>
            <p className="font-medium text-xs">
              {seeMore ? "See less" : "See more"}
            </p>
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gray-800 p-1 rounded-full">
            <Coins size={16} />
          </div>
          <div className="bg-gray-800 p-1 rounded-full">
            <Users size={16} />
          </div>
          <p className="text-[10px] font-medium">{dao.members}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-gray-800 p-1 rounded-full">
            <Newspaper size={16} />
          </div>
          <p className="text-[10px] font-medium">{dao.members}</p>
        </div>
      </div>

      <Button
        variant={"outline"}
        className="w-full flex items-center gap-2"
        onClick={() => {
          alert("Join the party");
        }}
      >
        <p className="font-medium text-sm">Join</p>
        <MoveRight size={16} />
      </Button>
    </div>
  );
}
