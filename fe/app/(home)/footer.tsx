import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import { TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col px-8 md:px-24 lg:px-32 py-16 gap-8 justify-around sm:items-center w-full bg-gradient-to-t from-background via-background to-muted/5">
      {/* Left */}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 sm:items-center">
        <Image
          src={"/logo.png"}
          alt={"Armada Logo Icon"}
          width={1000}
          height={1000}
          className="w-16 h-fit"
          priority
        />
        <div className="text-white/70 hidden sm:inline">|</div>
        <div className="text-white/70">
          © Copyright 2024. All rights reserved.
        </div>
      </div>

      {/* Middle */}

      {/* Right */}
      <div className="z-40 flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center">
        <Link href={PATH.mothershipMint}>
          <Button variant={"ghost"} className="px-0 sm:px-4 text-base h-10">
            Mint Armada NFT
          </Button>
        </Link>
        <div className="text-white/70 hidden sm:inline">|</div>
        <Link href={PATH.fleetCreate}>
          <Button variant={"ghost"} className="px-0 sm:px-4 text-base h-10">
            Create a Fleet
          </Button>
        </Link>
        <div className="text-white/70 hidden sm:inline mr-4">|</div>
        <Link href={"https://twitter.com/TheArmadaDAO"} target="_blank">
          <TwitterIcon
            size={32}
            className="bg-gradient-magenta p-1.5 rounded-2xl text-muted mt-4 sm:mt-0"
          />
        </Link>
        {/* <Link href={"#"} target="_blank">
          <FaGithub className="text-3xl text-white lg:text-2xl" />
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;
