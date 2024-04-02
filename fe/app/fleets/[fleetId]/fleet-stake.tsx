"use client";

// react next
import Image from "next/image";
import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { MonitorUp, Wallet } from "lucide-react";

// lib
import { cn } from "@/lib/utils";

const FleetStakeComponent = ({ className }: { className?: string }) => {
  const [selectedNFTs, setSelectedNFTs] = useState<Array<number>>([]);

  const handleSelectNFT = (index: number) => {
    if (selectedNFTs.includes(index))
      setSelectedNFTs((prevNFTs) => prevNFTs.filter((nft) => nft !== index));
    else setSelectedNFTs((prevNFTs) => [...prevNFTs, index]);
  };

  const handleStake = () => {
    alert("Stake NFT");
  };

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="w-full h-1 bg-gradient-blue" />
      <div className="flex flex-col gap-2">
        <div className="text-4xl text-muted">3,500 staked</div>
        <div className="text-xl text-muted-light">out of 6,969 NFTs</div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <Image
            src={"https://placehold.co/500x500?text=NFT+1"}
            alt={"NFT #1"}
            width={500}
            height={500}
            onClick={() => handleSelectNFT(1)}
            className={cn(
              "shadow-2xl rounded-2xl cursor-pointer hover:brightness-110",
              selectedNFTs.includes(1) && "border-4 border-magenta"
            )}
          />
          <Image
            src={"https://placehold.co/500x500?text=NFT+2"}
            alt={"NFT #2"}
            width={500}
            height={500}
            onClick={() => handleSelectNFT(2)}
            className={cn(
              "shadow-2xl rounded-2xl cursor-pointer hover:brightness-110",
              selectedNFTs.includes(2) && "border-4 border-magenta"
            )}
          />
          <Image
            src={"https://placehold.co/500x500?text=NFT+3"}
            alt={"NFT #3"}
            width={500}
            height={500}
            onClick={() => handleSelectNFT(3)}
            className={cn(
              "shadow-2xl rounded-2xl cursor-pointer hover:brightness-110",
              selectedNFTs.includes(3) && "border-4 border-magenta"
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-light">You have 3 NFTs</span>
          <Button
            variant={"ghost"}
            className="flex self-end justify-center gap-2 p-0 w-fit item-center"
          >
            See more
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button
          variant={"white"}
          className="flex justify-center w-full gap-2 item-center"
          onClick={handleStake}
        >
          <Wallet size={16} /> Stake NFT
        </Button>
        <Button
          variant={"destructive"}
          className="flex justify-center w-full gap-2 item-center"
          onClick={handleStake}
        >
          <MonitorUp size={16} /> Unstake NFT
        </Button>
      </div>
    </div>
  );
};

export default FleetStakeComponent;
