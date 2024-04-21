"use client";

import Link from "next/link";
import { useState } from "react";

// lib
import getConfig from "@/lib/blockchain-config";
import { PATH } from "@/lib/routes";

// components
import Bokeh from "@/components/ui/bokeh";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useArmadaMint from "@/lib/hooks/useArmadaMint";
import Image from "next/image";

function MintButton() {
  const { mint, isLoading, txHash, armadaNftName } = useArmadaMint();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cluster } = getConfig();

  const handleMint = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { status } = await mint();
    if (status === 200) setIsOpen(true);
  };

  return (
    <>
      <Button
        variant={"white"}
        size={"lg"}
        className="min-w-full"
        onClick={handleMint}
        isLoading={isLoading}
      >
        Mint Armada NFT
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <div className="flex flex-col items-center gap-5 p-8 text-center">
            <div className="relative flex justify-center">
              <Bokeh className="m-auto opacity-20 from-muted w-40 h-40 z-[-1]" />
              <Image
                src={"/assets/mint/welcome.png"}
                alt={"Welcome"}
                width={1000}
                height={1000}
                className="w-80 h-80 shadow-[0_4px_10px_rgba(255,22,255, 5%)] rounded-2xl"
              />
            </div>
            <p className="text-2xl font-semibold">🎉 Welcome aboard! 🎉</p>
            <p className="text-lg">
              Your journey to the stars has begun. Your{" "}
              <span className="font-semibold">
                {armadaNftName || "Armada DAO"}
              </span>{" "}
              NFT has been minted at{" "}
              <Link
                href={`https://explorer.solana.com/tx/${txHash}?cluster=${cluster}`}
                target="_blank"
                className="font-semibold underline"
              >
                this transaction
              </Link>
              . We highly suggest you start by creating your fleet below.
            </p>
            <Link href={PATH.fleetCreate}>
              <Button variant={"white"}>Create your Fleet</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MintButton;
