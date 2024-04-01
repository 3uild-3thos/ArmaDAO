"use client";
import { useState } from "react";

// next
import Image from "next/image";

// components
import { Button } from "@/components/ui/button";
import { Coins, MoveRight, Newspaper, Users } from "lucide-react";

// lib
import shortenDescription from "@/lib/helpers/shortenDescription";
import { IFleet } from "@/lib/schema/fleet.schema";

interface IFleetCardProps {
  fleet: IFleet;
  owned?: boolean;
}

function FleetCard({ fleet, owned = false }: IFleetCardProps) {
  const [seeMore, setseeMore] = useState(false);

  const onSeeMore = () => {
    setseeMore((state) => !state);
  };

  return (
    <div className="flex flex-col gap-4 border rounded-lg border-gray-600">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="h-64 w-full relative">
          <Image
            src={(fleet.info.logoUri as string) ?? ""}
            alt={fleet.info.name ?? ""}
            fill
            className="rounded-t-lg  object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 p-4">
        <div className="flex justify-between items-center">
          <p className="font-medium text-xl">{fleet.info.name}</p>
        </div>

        <div className="flex flex-wrap gap-1 items-center  h-10 max-h-60">
          <p className="text-xs">
            {seeMore
              ? shortenDescription(fleet.info.description, 80)
              : shortenDescription(fleet.info.description, 35)}
          </p>

          {fleet.info.description.length >= 50 && (
            <Button
              variant={"ghost"}
              className="p-0 m-0 h-0"
              onClick={onSeeMore}
            >
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
            <p className="text-[10px] font-medium">555</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Newspaper size={16} />
            </div>
            <p className="text-[10px] font-medium">666</p>
          </div>
        </div>

        {!owned && (
          <Button
            variant={"white"}
            className="w-full flex items-center gap-2"
            onClick={() => {
              alert("Join the party");
            }}
          >
            <p className="font-medium text-sm">Join</p>
            <MoveRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default FleetCard;
