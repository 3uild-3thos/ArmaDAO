"use client";

import Image from "next/image";
import { ReactNode } from "react";
import DAOInfoComponent from "./dao-info";
import DAOStatsComponent from "./dao-stats";

const DAODetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-16">
      {/* DAO Banner */}
      <Image
        src={"https://placehold.co/1920x1080?text=DAO+Banner"}
        alt={"DAO Banner"}
        width={1920}
        height={1080}
        className="max-h-[20rem] rounded-2xl object-cover shadow-2xl"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* DAO Info (Left) */}
        <DAOInfoComponent className="sm:pr-8" />

        {/* Divider */}

        {/* DAO Stats (Right) */}
        <DAOStatsComponent className="border-t border-gray-200/20 sm:border-l sm:border-t-0 sm:pl-8" />
      </div>

      {/* DAO Page Tabs */}

      {/* DAO Detail Pages */}
      {children}
    </div>
  );
};

export default DAODetailLayout;
