import Bokeh from "@/components/ui/bokeh";
import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

const Fleet = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 w-full px-8 sm:px-0 sm:w-[70%] relative z-10">
      <Bokeh className="m-auto bottom-0 right-[-70%] opacity-5 from-magenta z-[-1]" />
      <Image
        src={"/assets/fleet.png"}
        alt={"Fleet"}
        width={1089}
        height={1089}
        className="sm:col-span-7"
      />
      <div className="flex flex-col gap-8 justify-center sm:col-span-5">
        <div className="flex flex-col gap-4 sm:gap-2 justify-center">
          <span className="text-lg text-gray-600 font-semibold w-full">
            Launch a DAO in minutes
          </span>
          <h5 className="text-5xl sm:text-6xl font-semibold leading-[1.1]">
            Create Your Very Own Fleet
          </h5>
        </div>
        <span className="text-lg text-gray-600 w-full">
          Create a new fleet and start building your community. Change
          configurations and adapt modules as the community see fit.
        </span>
        <Link href={PATH.fleetCreate}>
          <Button variant={"white"} className="px-4 text-sm h-10">
            Create your Fleet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Fleet;
