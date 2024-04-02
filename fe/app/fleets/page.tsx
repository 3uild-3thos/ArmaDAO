// next
import Image from "next/image";

// components
import FilterButton from "@/app/fleets/filter-button";
import FleetCarousel from "@/app/fleets/fleet-carousel";
import FleetList from "@/app/fleets/fleet-list";
import { Button } from "@/components/ui/button";

const FleetsPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-3xl font-medium">Explore Fleets</p>
      <div className="flex justify-center w-full">
        <div className="h-fit w-fit">
          <Image
            src={"https://placehold.co/1200x360"}
            alt={"Fleet Banner"}
            width={1200}
            height={360}
            className="rounded-[2rem] object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* TODO: Only show this if the user has the NFT */}
      <FleetCarousel />

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">All</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">Trending</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">Upcoming</p>
          </Button>
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">Finished</p>
          </Button>

          {/* TODO: Only show this if the user has the NFT */}
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">Favourites</p>
          </Button>

          {/* TODO: Only show this if the user has the NFT */}
          <Button variant={"ghost"} className="px-3 py-4">
            <p className="text-sm font-medium text-gray-50">Your Sub-Fleets</p>
          </Button>
        </div>

        <div className="flex gap-2">
          <FilterButton title="Oldest" />
          <FilterButton title="Most Funded" />
          <FilterButton title="Most Backers" />
          <FilterButton title="All Categories" />
        </div>
      </div>
      <FleetList />
    </div>
  );
};

export default FleetsPage;
