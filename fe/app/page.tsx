import Collaborations from "@/app/(home)/collaborations";
import Features from "@/app/(home)/features";
import Footer from "@/app/(home)/footer";
import Hero from "@/app/(home)/hero";
import { BackgroundBeams } from "@/components/ui/bg-beams";
import { BackgroundGradient } from "@/components/ui/bg-gradient";
import Image from "next/image";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center w-full min-h-screen gap-24"
    >
      <BackgroundBeams />
      <Hero />
      <div className="w-[90%] sm:w-[60%] -mt-24">
        <BackgroundGradient className="p-4 rounded-2xl bg-background">
          <Image
            src={"/assets/hero-screenshot.png"}
            alt={"Screenshot"}
            width={2982}
            height={1853}
            className="rounded-2xl"
          />
        </BackgroundGradient>
      </div>
      <Collaborations />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
