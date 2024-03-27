import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const DAOPage = () => {
  return (
    <div className="flex flex-col just gap-8">
      <p className="font-medium text-3xl">Explore projects</p>
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
        </div>

        <div className="flex gap-2">
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Oldest</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Most Funded</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">Most Backers</p>
          </Button>
          <Button variant={"outline"} className="rounded-full">
            <p className="font-medium text-sm">All Categories</p>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default DAOPage;

function ProjectCard() {
  return (
    <div className="flex flex-col p-4 gap-5 border border-gray-500 rounded-lg">
      <div className="w-full flex justify-center items-center">
        {" "}
        <div className="h-fit w-fit">
          <Image
            src={"https://placehold.co/256x250"}
            alt={"DAO Banner"}
            width={256}
            height={250}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-xl">DAOCre-8</p>
        <p className="font-medium text-xs">By DAOCre8 Inc.</p>
      </div>

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

      <div className="flex flex-col gap-3">
        <Progress value={32.41} className="h-[2px]" />
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="flex gap-1">
              <p className="text-sm font-medium">32,412</p>
              <p className="text-[10px]">/ 100,000 goal</p>
            </div>
          </div>

          <p className="text-[10px]">32.41% Funded</p>
        </div>

        <Button variant={"outline"}>View</Button>
      </div>
    </div>
  );
}
