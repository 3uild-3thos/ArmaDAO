import { BackgroundBeams } from "@/components/ui/bg-beams";
import Bokeh from "@/components/ui/bokeh";
import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home-hero"
      className="relative flex flex-col items-center justify-center w-full h-full px-4 sm:px-0 gap-8 pt-48 pb-24"
    >
      <BackgroundBeams />

      <div className="relative w-full sm:w-[64rem] h-full z-10">
        <Bokeh className="top-0 bottom-0 left-0 right-0 m-auto " />
        <div className="flex flex-col items-center justify-center gap-8 text-center ">
          <h1 className="text-5xl sm:text-8xl font-bold leading-[1.3] text-muted">
            Launch your modular
            <br className="hidden sm:block" /> DAO{" "}
            <span className="text-gradient-magenta">in minutes</span>
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-2xl text-gray-300">
              The #1 No-Code Governance on Solana
            </h2>
            <h3 className="text-base sm:text-2xl text-gray-300">
              A DAO for DAOS, by DAOs
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 my-8">
            <Link href={PATH.mothershipMint}>
              <Button variant={"outline"} className="px-8 text-lg h-14">
                Mint Armada NFT
              </Button>
            </Link>
            <Link href={PATH.fleetCreate}>
              <Button variant={"white"} className="px-8 text-lg h-14">
                Create your Fleet
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span>Powered by</span>
            <Image
              src={"/assets/logo-solana.png"}
              alt={"Logo Solana"}
              width={2584}
              height={384}
              className="w-24 h-fit"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
