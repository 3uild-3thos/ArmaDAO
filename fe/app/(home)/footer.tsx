import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col px-8 md:px-24 lg:px-32 py-16 gap-8 justify-around items-center w-full bg-gradient-to-t from-background to-70% to-transparent">
      {/* Left */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium">Armada</span>
          <span>The #1 No-Code Governance on Solana</span>
        </div>
        <div className="text-white/70">
          © Copyright 2024. All rights reserved.
        </div>
      </div>

      {/* Middle */}
      <Image
        src={"/logo.png"}
        alt={"Armada Logo Icon"}
        width={1000}
        height={1000}
        className="w-20 h-fit"
        priority
      />

      {/* Right */}
      <div className="z-40 flex gap-8">
        <Link href={"https://twitter.com/TheArmadaDAO"} target="_blank">
          <XIcon size={24} />
        </Link>
        {/* <Link href={"#"} target="_blank">
          <FaGithub className="text-3xl text-white lg:text-2xl" />
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;
