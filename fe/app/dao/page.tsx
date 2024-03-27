import React from "react";

// next
import Image from "next/image";

// components
import SubDaoCarousel from "@/app/dao/subdao-carousel";
import SubDaosList from "@/dao/subdaos-list";
import { Button } from "@/components/ui/button";
import FilterButton from "@/dao/filter-button";

const DAOPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="font-medium text-3xl">Explore Fleets</p>
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

      {/* TODO: Only show this if the user has the NFT */}
      <SubDaoCarousel />

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

          {/* TODO: Only show this if the user has the NFT */}
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">Favourites</p>
          </Button>

          {/* TODO: Only show this if the user has the NFT */}
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-gray-50 font-medium text-sm">Your Sub-Fleets</p>
          </Button>
        </div>

        <div className="flex gap-2">
          <FilterButton title="Oldest" />
          <FilterButton title="Most Funded" />
          <FilterButton title="Most Backers" />
          <FilterButton title="All Categories" />
        </div>
      </div>
      <SubDaosList />
    </div>
  );
};

export default DAOPage;
