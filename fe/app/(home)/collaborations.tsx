import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
import { PATH } from "@/lib/routes";
import Link from "next/link";

const collabs = [
  {
    name: "Solana Foundation",
    imageUri: "/assets/collaborations/1.png",
  },
  {
    name: "Solana Turbin3",
    imageUri: "/assets/collaborations/2.png",
  },
  {
    name: "WBA",
    imageUri: "/assets/collaborations/3.png",
  },
  {
    name: "Tally",
    imageUri: "/assets/collaborations/4.png",
  },
  {
    name: "DAOCre-8",
    imageUri: "/assets/collaborations/5.png",
  },
  {
    name: "Cade",
    imageUri: "/assets/collaborations/6.png",
  },
  {
    name: "Project AXS",
    imageUri: "/assets/collaborations/7.png",
  },
  {
    name: "Deploy DAO",
    imageUri: "/assets/collaborations/8.png",
  },
];

const Collaborations = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center my-16 px-8 sm:px-0">
      <h5 className="text-4xl sm:text-5xl font-semibold leading-[1.3]">
        Level Up your DAO,
        <br />
        Join Our Growing Community
      </h5>
      <h6 className="text-lg text-gray-300 w-2/3 sm:w-1/2">
        We are proud to have collaborated with these amazing communities.
      </h6>
      <div className="flex gap-8 my-8">
        <Link href={PATH.mothershipMint}>
          <Button variant={"outline"} className="px-4 text-sm h-10">
            Mint Armada NFT
          </Button>
        </Link>
        <Link href={PATH.fleetCreate}>
          <Button variant={"white"} className="px-4 text-sm h-10">
            Create your Fleet
          </Button>
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased rounded-md bg-background">
        <InfiniteMovingCards
          items={collabs}
          direction="right"
          speed="slow"
          className="w-screen sm:w-full"
        />
      </div>
    </div>
  );
};

export default Collaborations;
