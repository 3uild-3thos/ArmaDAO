import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

const Mothership = () => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-12 w-full z-10 px-8 sm:px-0 sm:w-[70%]">
      <div className="flex flex-col gap-8 justify-center sm:col-span-5 order-2 sm:order-1">
        <div className="flex flex-col gap-4 sm:gap-2 justify-center">
          <span className="text-lg text-gray-600 font-semibold w-full">
            Vote on a platform that matters
          </span>
          <h5 className="text-5xl sm:text-6xl font-semibold leading-[1.1]">
            Join The Mothership
          </h5>
        </div>
        <span className="text-lg text-gray-600 w-full">
          The Armada itself has a DAO called the Mothership - driven by the
          community in terms of features, decisions and configurations.
        </span>
        <Link href={PATH.mothershipMint}>
          <Button variant={"white"} className="px-4 text-sm h-10 mt-4">
            Mint Armada NFT
          </Button>
        </Link>
      </div>
      <Image
        src={"/assets/mothership.png"}
        alt={"Mothership"}
        width={981}
        height={1002}
        className="sm:col-span-7 order-1 sm:order-2"
      />
    </div>
  );
};

export default Mothership;
