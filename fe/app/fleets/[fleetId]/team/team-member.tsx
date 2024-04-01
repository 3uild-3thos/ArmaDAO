"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// components
import { Github, Globe, Linkedin, Pencil, Trash2, Twitter } from "lucide-react";
import { ITeamMember } from "@/lib/schema/team-member.schema";

interface TeamMemberProps {
  member: ITeamMember;
}

function TeamMember({ member }: TeamMemberProps) {
  const onDelete = () => {
    alert("Delete");
  };

  const onUpdate = () => {
    alert("Update");
  };

  return (
    <div className="p-4 flex gap-4 ">
      <div className="h-fit w-fit">
        <Image
          src={"https://placehold.co/100x100"}
          alt={"DAO Banner"}
          width={100}
          height={100}
          className="rounded-lg object-cover shadow-2xl"
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{member.name}</p>
            <p className="text-sm"> {member.position}</p>
            <div className="flex items-center gap-3">
              <Link href={member.twitter}>
                <Twitter size={16} />
              </Link>
              <Link href={member.linkedIn}>
                <Linkedin size={16} />
              </Link>{" "}
              <Link href={member.github}>
                <Github size={16} />
              </Link>{" "}
              <Link href={member.website}>
                <Globe size={16} />
              </Link>{" "}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Trash2
              size={19}
              className="text-red-900 cursor-pointer"
              onClick={onDelete}
            />
            <Pencil size={16} className="cursor-pointer" onClick={onUpdate} />
          </div>
        </div>
        <p className="text-xs text-gray-300">{member.description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
