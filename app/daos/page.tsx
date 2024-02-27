"use client";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  const { publicKey, sendTransaction } = useWallet();

  return (
    <main className="flex gap-5">
      <div className="flex flex-col items-center gap-2 bg-slate-900 text-white w-fit max-w-72 p-3 rounded-lg">
        <Image src="/image.png" height={150} width={150} alt="asd" />
        <p className="text-center">
          <p className="text-xl font-bold">Main DAO</p>
          <p className="text-sm"> August 2024</p>
        </p>

        <p className="px-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full text-left text-sm">
          <p>26 proposals</p>
          <p>100 stakeholders</p>
        </div>
      </div>{" "}
    </main>
  );
}
