"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ReactNode } from "react";
import DAOInfoComponent from "./dao-info";
import DAOStatsComponent from "./dao-stats";

const DAOTabs = [
  {
    label: "Proposals",
    href: "/dao/[daoId]/proposals",
  },
  {
    label: "Forums",
    href: "/dao/[daoId]/forums",
  },
  {
    label: "Team",
    href: "/dao/[daoId]/team",
  },
];

const DAODetailLayout = ({ children }: { children: ReactNode }) => {
  const { daoId } = useParams();
  const pathname = usePathname();

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
        <DAOStatsComponent className="border-t border-gray-200/10 sm:border-l sm:border-t-0 sm:pl-8" />
      </div>

      {/* DAO Page Tabs */}
      <div className="my-4 flex gap-4">
        {DAOTabs.map(({ label, href }) => {
          const matchedHref = daoId
            ? href.replace("[daoId]", daoId as string)
            : href;
          return (
            <Link
              key={label}
              href={matchedHref}
              className={cn(
                "relative flex items-center gap-2 rounded-lg py-3 px-6 hover:text-cyan duration-200",
                pathname.includes(matchedHref) &&
                  "bg-gray-500/10 hover:text-inherit"
              )}
              aria-disabled={pathname.includes(matchedHref)}
            >
              {label}
              {pathname.includes(matchedHref) && (
                <div className="absolute top-2 right-2 rounded-full p-1 bg-cyan" />
              )}
            </Link>
          );
        })}
      </div>

      {/* DAO Detail Pages */}
      {children}
    </div>
  );
};

export default DAODetailLayout;
