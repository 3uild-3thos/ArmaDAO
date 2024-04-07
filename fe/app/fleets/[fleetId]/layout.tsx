"use client";

// react next
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ReactNode } from "react";

// components
import FleetInfoComponent from "@/app/fleets/[fleetId]/fleet-info";
import FleetStakeComponent from "@/app/fleets/[fleetId]/fleet-stake";

// lib
import { cn } from "@/lib/utils";

const FleetTabs = [
  {
    label: "Proposals",
    href: "/fleets/[fleetId]/proposals",
  },
  {
    label: "Forums",
    href: "/fleets/[fleetId]/forums",
  },
  {
    label: "Team",
    href: "/fleets/[fleetId]/team",
  },
];

const FleetDetailLayout = ({ children }: { children: ReactNode }) => {
  const { fleetId } = useParams();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-16">
      {/* Fleet Banner */}
      <Image
        src={"https://placehold.co/1920x1080?text=Fleet+Banner"}
        alt={"Fleet Banner"}
        width={1920}
        height={1080}
        className="max-h-[20rem] rounded-2xl object-cover shadow-2xl"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Fleet Info (Left) */}
        <FleetInfoComponent className="sm:pr-8" />

        {/* Divider */}

        {/* Fleet Stats (Right) */}
        <FleetStakeComponent className="border-t border-gray-200/10 sm:border-l sm:border-t-0 sm:pl-8" />
      </div>

      {/* Fleet Page Tabs */}
      <div className="flex gap-4 my-4">
        {FleetTabs.map(({ label, href }) => {
          const matchedHref = fleetId
            ? href.replace("[fleetId]", fleetId as string)
            : href;
          return (
            <Link
              key={label}
              href={matchedHref}
              className={cn(
                "relative flex items-center gap-2 rounded-lg py-3 px-6 hover:text-magenta duration-200",
                pathname.includes(matchedHref) &&
                  "bg-gray-500/10 hover:text-inherit"
              )}
              aria-disabled={pathname.includes(matchedHref)}
            >
              {label}
              {pathname.includes(matchedHref) && (
                <div className="absolute p-1 rounded-full top-2 right-2 bg-magenta" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Fleet Detail Pages */}
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
};

export default FleetDetailLayout;
