"use client";
// next
import Image from "next/image";

// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Coins, Newspaper, Users } from "lucide-react";

// mock
import { daos } from "@/mock/daos";
import { ISubDaoInfo } from "@/lib/schema/subdao-info.schema";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import shortenDescription from "@/lib/helpers/shortenDescription";

function SubDaoCarouselList() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium">Your Sub-Fleets</p>
      <Carousel>
        <CarouselContent className="ml-4">
          {daos.map((dao) => {
            return (
              <CarouselItem key={dao.id} className="basis-1/5">
                <SubdaoCard dao={dao} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

interface ISubdaoCardProps {
  dao: ISubDaoInfo;
}

function SubdaoCard({ dao }: ISubdaoCardProps) {
  const [seeMore, setseeMore] = useState(false);

  const onSeeMore = () => {
    setseeMore((state) => !state);
  };

  return (
    <div className="flex flex-col gap-3 border rounded-lg border-gray-600">
      <div className="flex flex-col justify-center items-center">
        <div className="h-full w-full">
          <Image
            src={dao.image ?? ""}
            alt={dao.image ?? ""}
            width={300}
            height={300}
            className="rounded-t-lg  object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-1 p-3">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-medium text-xl">{dao.title}</p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <p className=" text-xs">
              {seeMore
                ? shortenDescription(dao.description, 95)
                : shortenDescription(dao.description, 30)}
            </p>

            {dao.description.length >= 50 && (
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
              <p className="text-[10px] font-medium">{dao.members}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-gray-800 p-1 rounded-full">
                <Newspaper size={16} />
              </div>
              <p className="text-[10px] font-medium">{dao.members}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubDaoCarouselList;
