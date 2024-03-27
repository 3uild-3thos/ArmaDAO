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
import { Progress } from "@/components/ui/progress";
import { Bell, ThumbsUp } from "lucide-react";

function FundedProjects() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium">Your funded projects</p>
      <Carousel>
        <CarouselContent className="ml-4">
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <FundedProjectCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function FundedProjectCard() {
  return (
    <div className="grid grid-cols-3 p-4 gap-6">
      <div className="flex justify-center items-center">
        <div className="h-fit w-fit">
          <Image
            src={"https://placehold.co/145x145"}
            alt={"DAO Banner"}
            width={145}
            height={145}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-xl">DAOCre-8</p>

            <div className="flex items-center gap-2">
              <ThumbsUp size={20} />
              <Bell size={20} />
            </div>
          </div>

          <p className="font-medium text-xs">By DAOCre8 Inc.</p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Type</p>
              <p className="text-xs font-medium">Software</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Backers</p>
              <p className="text-xs font-medium">1,784</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px]">Ends in</p>
              <p className="text-xs font-medium">26d 5h 34m 42s</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Progress value={32.41} className="h-[2px]" />
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <p className="text-sm font-medium">$ 32,412</p>
              <p className="text-[10px]">/ 100,000 goal</p>
            </div>

            <p className="text-[10px]">32.41% Funded</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundedProjects;
