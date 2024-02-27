"use client";
import React from "react";
import Image from "next/image";
import image from "@/public/image.png";
import { useRouter } from "next/navigation";
interface IDaoCard {
  title: string;
  createdAt: string;
  description: string;
}

function DaoCard({ title, createdAt, description }: IDaoCard) {
  const router = useRouter();
  return (
    <div
      className="bg-slate-900 p-4 w-60 rounded-lg flex flex-col gap-6 text-gray-500 shadow-xl"
      onClick={() => {
        router.push("/dao");
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <Image src={image} width={100} height={100} alt="profile-pic" />
        <div className="flex flex-col items-center">
          <p className="font-semibold text-gray-100">{title}</p>
          <p className="text-sm">{createdAt}</p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-2">
        <p className=" text-gray-200 text-sm">{description}</p>
        <div className="flex flex-col">
          <p className="text-xs">$9.26k est. USD value</p>
          <p className="text-xs">14 proposals</p>
        </div>
      </div>
    </div>
  );
}

export default DaoCard;
