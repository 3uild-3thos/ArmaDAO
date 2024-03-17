"use client";

import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home-hero"
      className="relative flex flex-col items-center justify-center w-full h-full gap-8 pt-40 pb-24"
    >
      <div className="relative w-full sm:w-[40rem] h-full flex flex-col gap-16 items-center justify-center">
        <div className="absolute z-[-1] top-0 bottom-0 left-0 right-0 m-auto bg-gradient-to-tr from-cyan from-60% to-white rounded-full h-full w-full blur-[80px] opacity-60 pointer-events-none" />
        <span className="text-4xl">LFG Armada!</span>
        <div className="flex gap-4">
          <Link href={PATH.mothershipMint}>
            <Button variant={"outline"}>Mint Armada</Button>
          </Link>
          <Link href={PATH.fleetCreate}>
            <Button variant={"white"}>Create Fleet</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
