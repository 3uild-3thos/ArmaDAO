import Collaborations from "@/app/(home)/collaborations";
import Features from "@/app/(home)/features";
import Fleet from "@/app/(home)/fleet";
import Footer from "@/app/(home)/footer";
import Hero from "@/app/(home)/hero";
import Mothership from "@/app//(home)/mothership";
import { BackgroundGradient } from "@/components/ui/bg-gradient";
import Image from "next/image";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center w-full min-h-screen gap-24 overflow-hidden"
    >
      <Hero />
      <div className="w-[90%] sm:w-[60%] -mt-40">
        <BackgroundGradient className="rounded-2xl bg-background">
          <Image
            src={"/assets/hero-screenshot.png"}
            alt={"Screenshot"}
            width={2982}
            height={1853}
            className="rounded-2xl"
          />
        </BackgroundGradient>
      </div>
      <Features />
      <Mothership />
      <Fleet />
      <Collaborations />
      <Footer />
    </div>
  );
};

export default Home;
